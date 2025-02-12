import { useState, useEffect } from "react";
import bgimg from "../../assets/Images/Login_Background.png";
import "../../Pages/AdvertisersRegistration/AdvertisersRegistration.css";
import { advertiserSignup } from "../../Services/apiService";
import { getInterests } from "../../Services/apiService";
import 'font-awesome/css/font-awesome.min.css';

function AdvertisersRegistration() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(""); // Separate state for confirm password

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        user_type: "advertiser",
        business_name: "",
        business_type_id: "",
        contact_number: "",
        address: "",
        profile_image: null,
    });

    const [businessTypes, setBusinessTypes] = useState([]);
    const [selectedBusinessType, setSelectedBusinessType] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchBusinessTypes = async () => {
            try {
                const response = await getInterests();
                if (response && response.data) {
                    setBusinessTypes(response.data);
                }
            } catch (error) {
                console.error("Error fetching business types:", error);
            }
        };
        fetchBusinessTypes();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, profile_image: file }); // Fixed typo here: profile_mage -> profile_image
            console.log("File selected:", file.name);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBusinessTypeChange = (id, name) => {
        setFormData({ ...formData, business_type_id: id });
        setSelectedBusinessType(name); // Optionally set the selected business type name
    }; // Fixed the missing closing brace here

    const validateForm = () => {
        const newErrors = {};
        // Check if required fields are empty
        if (!formData.username) newErrors.username = "Username is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";
        if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required"; // Validate confirm password separately
        if (!formData.contact_number) newErrors.contactNumber = "Contact Number is required";
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.business_name) newErrors.businessName = "Business Name is required";
        if (!formData.business_type_id) newErrors.businessType = "Business Type is required";

        // Check if email format is correct
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Check if password and confirm password match
        if (formData.password !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return; // Don't submit if there are validation errors
        }
        console.log("Form data:", formData);
        try {
            const response = await advertiserSignup(formData); // Only send formData without confirmPassword
            console.log("Signup API response:", response);
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    return (
        <div className="advertisers-registration">
            <div className="advertisers-registration-left">
                <img className="advertisers-registration-bg-img" src={bgimg} alt="Background" />
            </div>
            <div className="advertisers-registration-right">
                <p className="advertisers-registration-head">Signup</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="file-upload" className="btn file-upload-btn mb-2">
                        Profile Image
                    </label>
                    <input
                        type="file"
                        id="file-upload"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <input
                        type="text"
                        placeholder="Username"
                        className={`form-control mb-2 ${errors.username ? 'is-invalid' : ''}`}
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}

                    <input
                        type="email"
                        placeholder="Email"
                        className={`form-control mb-2 ${errors.email ? 'is-invalid' : ''}`}
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                    <div className="password-field-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className={`form-control mb-2 ${errors.password ? 'is-invalid' : ''}`}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <span
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        >
                            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                        </span>
                    </div>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}

                    <div className="password-field-container">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            className={`form-control mb-2 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                        />
                        <span
                            className="password-toggle-icon"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            <i className={`fa ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                        </span>
                    </div>
                    {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}

                    <input
                        type="text"
                        placeholder="Business Name"
                        className={`form-control mb-2 ${errors.businessName ? 'is-invalid' : ''}`}
                        name="business_name"
                        value={formData.business_name}
                        onChange={handleInputChange}
                    />
                    {errors.businessName && <div className="invalid-feedback">{errors.businessName}</div>}

                    <div className="dropdown">
                        <button
                            type="button"
                            className={`btn btn-light dropdown-toggle mb-2 form-control ${errors.business_type_id ? 'is-invalid' : ''}`}
                            data-bs-toggle="dropdown"
                        >
                            {selectedBusinessType || "Business Type"}
                        </button>
                        <ul className="dropdown-menu">
                            {businessTypes.map((type) => (
                                <li key={type.id}>
                                    <a
                                        className="dropdown-item"
                                        href="#"
                                        onClick={() => handleBusinessTypeChange(type.id, type.name)}
                                    >
                                        {type.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {errors.business_type_id && <div className="invalid-feedback">{errors.business_type_id}</div>}
                    <input
                        type="tel"
                        placeholder="Contact Number"
                        className={`form-control mb-2 ${errors.contact_number ? 'is-invalid' : ''}`}
                        name="contact_number"
                        value={formData.contact_number}
                        onChange={handleInputChange}
                    />
                    {errors.contact_number && <div className="invalid-feedback">{errors.contact_number}</div>}

                    <textarea
                        placeholder="Address"
                        cols={65}
                        rows={5}
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    ></textarea>
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}

                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-dark submit-btn mt-3">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdvertisersRegistration;
