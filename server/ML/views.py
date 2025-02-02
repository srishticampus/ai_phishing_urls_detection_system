#views.py ML
"""
This module contains views and endpoints for the ML app
"""
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from accounts.models import User, Advertisement  # Import from accounts app
from accounts.permissions import IsAdmin  # Import custom permission class
from ML.models import AdvertisementAnalysis  # Import from ML app


class CheckAdvertiserMaliciousLinksView(APIView):
    """
    API view to check if an advertiser has posted any malicious links.
    """
    permission_classes=[IsAdmin]

    def get(self, request, advertiser_id):
        """
        GET request to check if an advertiser has posted any malicious links.
        """
        try:
            # Fetch the advertiser from the accounts app
            advertiser = User.objects.get(id=advertiser_id, user_type='advertiser')

            # Fetch all advertisements by the advertiser
            advertisements = Advertisement.objects.filter(advertiser=advertiser)

            # Check if any of the advertisements have a malicious link
            malicious_links = []
            for advertisement in advertisements:
                try:
                    analysis = AdvertisementAnalysis.objects.get(advertisement=advertisement)
                    if analysis.prediction != "Benign":
                        malicious_links.append({
                            "advertisement_id": advertisement.id,
                            "title": advertisement.title,
                            "link": advertisement.link,
                            "prediction": analysis.prediction,
                        })
                except AdvertisementAnalysis.DoesNotExist:
                    # If no analysis exists, skip this advertisement
                    continue

            # Return the response
            if malicious_links:
                return Response(
                    {
                        "message": "Malicious links found.",
                        "advertiser_id": advertiser.id,
                        "advertiser_username": advertiser.username,
                        "malicious_links": malicious_links,
                        "is_malicious": True,
                    },
                    status=status.HTTP_200_OK,
                )
            return Response(
                    {
                        "message": "No malicious links found for this advertiser.",
                        "advertiser_id": advertiser.id,
                        "advertiser_username": advertiser.username,
                        "is_malicious": False,
                    },
                    status=status.HTTP_200_OK,
                )

        except User.DoesNotExist:
            return Response(
                {"error": "Advertiser not found."},
                status=status.HTTP_404_NOT_FOUND,
            )
        except Exception as e:
            return Response(
                {"error": "An unexpected error occurred.", "details": str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
