import { useState, useEffect, useRef } from 'react';
import "../../Pages/AdvertisersSignup/AdvertisersSignup.css";
import useemptyprofile from "../../assets/Images/user_empty_profile.png";
import { Link, useNavigate } from 'react-router-dom';
import { getInterests } from "../../Services/apiService";
import { advertiserSignup } from "../../Services/apiService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'font-awesome/css/font-awesome.min.css'; // Import FontAwesome for the toggle icon



function AdvertisersSignup() {
    const fileInputRef = useRef(null);
    const [interests, setInterests] = useState([]);
    const [selectedBusinessType, setSelectedBusinessType] = useState("");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        business_name: "",
        business_type_id: "",
        contact_number: "",
        address: "",
        profile_image: null,
        user_type: "advertiser"
    });
    const [imagePreview, setImagePreview] = useState(null);  
    const [imageName, setImageName] = useState("");  
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    // Fetch business types when the component mounts
    useEffect(() => {
        const fetchInterests = async () => {
            try {
                const response = await getInterests();
                if (response && response.data) {
                    setInterests(response.data);
                }
            } catch (error) {
                console.error("Error fetching business types:", error);
            }
        };
        fetchInterests();
    }, []);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, profile_image: file });
            setImagePreview(URL.createObjectURL(file));  
            setImageName(file.name);  
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBusinessTypeChange = (id, name) => {
        setFormData({ ...formData, business_type_id: id });
        setSelectedBusinessType(name);
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
        if (!formData.business_name) newErrors.businessName = "Business Name is required";
        if (!formData.business_type_id) newErrors.businessType = "Business Type is required";
        if (!formData.contact_number) newErrors.contactNumber = "Contact Number is required";
        if (!formData.address) newErrors.address = "Address is required";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix the errors in the form."); // Show error toast
            return;
        }

        try {
            const response = await advertiserSignup(formData);
            console.log("Signup API response:", response);

            if (response.success) {
                toast.success("Signup successful! Redirecting to login..."); // Show success toast
                setTimeout(() => {
                    navigate("/advertiser-login"); // Redirect after a delay
                }, 2000); // 2-second delay
            } else {
                // Extract error messages from the API response
                console.log("Signup failed:", response.fullResponse.data);
                const errorMessages = Object.values(response.fullResponse.data).flat().join(", ");
                toast.error(errorMessages || "Signup failed. Please try again."); // Show error toast
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error("An error occurred. Please try again."); // Show error toast
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="d-flex justify-content-center flex-column">
            <p className="advertisers-signup-head">SignUp!</p>
            <div>
            <div className="advertisers-signup-img-div">
    <img src={imagePreview || useemptyprofile} alt="profileImg" />
    <button type="button" className='btn mt-3' onClick={handleButtonClick}>
        {/* Check if an image is selected */}
        {imagePreview ? (
            <div className="image-name-preview mt-2">
                <p>{imageName}</p> {/* Show image name if an image is selected */}
            </div>
        ) : (
            "Add Image"  // Show "Add Image" button if no image is selected
        )}
    </button>
    <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
    />
</div>

                <div className="row advertisers-signup-name-row">
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className={`form-control ${errors.businessName ? 'is-invalid' : ''}`}
                            placeholder="Business Name"
                            name="business_name"
                            value={formData.business_name}
                            onChange={handleInputChange}
                        />
                        {errors.businessName && <div className="invalid-feedback">{errors.businessName}</div>}
                    </div>
                </div>
                <div className="row advertisers-signup-sec-row">
                    <div className="col-sm-4">
                        <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-sm-4">
                        <div className="dropdown">
                            <button className="btn btn-outline-secondary dropdown-toggle form-control" type="button" data-bs-toggle="dropdown">
                                {selectedBusinessType || "Select Business Type"}
                            </button>
                            <ul className="dropdown-menu">
                                {interests.map((interest) => (
                                    <li key={interest.id}>
                                        <a className="dropdown-item" href="#" onClick={() => handleBusinessTypeChange(interest.id, interest.name)}>
                                            {interest.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {errors.businessType && <div className="invalid-feedback d-block">{errors.businessType}</div>}
                    </div>
                </div>
                <div className="row advertisers-signup-third-row">
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                            placeholder="Contact Number"
                            name="contact_number"
                            value={formData.contact_number}
                            onChange={handleInputChange}
                        />
                        {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
                    </div>
                    <div className="col-sm-4">
                        <div className="password-field-container">
                            <input
                                type={showPassword ? "text" : "password"}
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            <span
                                className="password-toggle-icon"
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row advertisers-signup-fourth-row">
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            placeholder="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                    <div className="col-sm-4">
                        <div className="password-field-container">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                            <span
                                className="password-toggle-icon"
                                onClick={toggleConfirmPasswordVisibility}
                            >
                                <i className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="advertisers-signup-button-div mt-4">
                <button type="submit" className="btn btn-dark advertisers-signup-button mb-3" onClick={handleSubmit}>SignUp</button>
                <p className="advertisers-signup-already-have-account">
                    Already have an account? <Link className="advertisers-signup-login" to="/advertiser-login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default AdvertisersSignup;
