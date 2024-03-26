import { useState } from "react";
import signupImage from "./signup.png";
import signupSvg from "./svg.jpg";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState(null); // State to track selected language
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown for language
  };

  const handleOptionClick = (option) => {
    setSelectedLanguage(option); // Set the selected language
    setIsOpen(false); // Close the dropdown
  };

  //react-hook-form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  //drop-down for asking three question's
  const toggleDropdownforOption = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  //password visibility function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-11">
        {/* strat left site  */}
        <div className="bg-black text-white text-center min-h-screen col-span-5 hidden lg:block">
          <h4 style={{ fontFamily: "" }} className="just mt-36 mb-14 text-5xl">
            <span>Sign up</span> <br />
            <span>and come on in</span>{" "}
          </h4>
          <img src={signupImage} alt="" className="m-auto" />
        </div>
        {/* end left site  */}

        {/* start right site  */}
        <div className="col-span-6">
          <div>
            {/* top section  */}
            <div className="flex justify-between">
              <div>
                <button onClick={toggleDropdown} className="flex text-xl ml-2">
                  {/* <FaEarthAfrica /> */}
                  <FaGlobe className="mt-1 mr-1" />
                  {selectedLanguage ? selectedLanguage : "English"}
                  <FaChevronDown className="text-sm mt-3 ml-1" />
                </button>
                {isOpen && (
                  <div className="dropdown-content w-28 rounded shadow-xl p-8 justify-start">
                    <button
                      onClick={() => handleOptionClick("English")}
                      className=""
                    >
                      English
                    </button>
                    <br />
                    <br />
                    <button onClick={() => handleOptionClick("Spanish")}>
                      Spanish
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <p className="mt-3">Already have an account?</p>
                <button className="btn">Log in</button>
              </div>
            </div>

            {/* heading section  */}
            <div>
              <div className="flex mt-40 justify-center">
                <img src={signupSvg} alt="" className="mr-2" />
                <button className="text-4xl font-bold">Typeform</button>
              </div>
              <div className="w-4/5 mx-auto">
                <h3 className="text-3xl text-center mt-7 font-thin">
                  Get better data with conversational forms, surveys, quizzes &
                  more.
                </h3>
              </div>
            </div>
          </div>

          {/* contact form  */}
          <div>
            <form
              className="card-body lg:w-2/5 mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-control">
                <label className="label"></label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Password should be longer than 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/,
                        message:
                          "You should use at least one number and one symbol in your password",
                      },
                    })}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateY(-50%)",
                      right: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-600">
                    {errors.password.message}
                  </span>
                )}
                {errors.pattern && <span>{errors.pattern.message}</span>}

                <label className="mt-3">
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    {...register("checkbox", { required: true })}
                  />
                  I agree to Typeform’s Terms of Service, Privacy Policy and
                  Data Processing Agreement.
                </label>
                {errors.checkbox && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>



              <div className="">
                <div className="flex">
                  <button
                    onClick={toggleDropdownforOption}
                    className="toggle-button text-lg"
                  >
                    {isDropdownOpen ? "Hide" : "See"} options
                  </button>
                  <FaChevronDown className="text-sm mt-2 ml-3" />
                </div>
                <br />
                {isDropdownOpen && (
                  <div className="dropdown">
                    <div className="mt-4">
                      <p>
                        Get useful tips, inspiration, and offers via
                        e-communication.
                      </p>
                      <div className="radio-buttons">
                        <label className="mr-3 text-xl">
                          <input
                            type="radio"
                            name="one"
                            value="Yes"
                            className="mr-3"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Yes
                        </label>
                        <label className="text-xl">
                          <input
                            type="radio"
                            name="one"
                            value="No"
                            className="mr-3"
                            style={{ width: "20px", height: "20px" }}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p>
                        Tailor Typeform to my needs based on my activity.See
                        Privacy Policy
                      </p>
                      <div className="radio-buttons">
                        <label className="mr-3 text-xl">
                          <input
                            type="radio"
                            name="one"
                            value="Yes"
                            className="mr-3"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Yes
                        </label>
                        <label className="text-xl">
                          <input
                            type="radio"
                            name="one"
                            value="No"
                            className="mr-3"
                            style={{ width: "20px", height: "20px" }}
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p>
                        Enrich my data with select third parties for more
                        relevant content.See Privacy Policy
                      </p>
                      <div className="radio-buttons">
                        <label className="mr-3 text-xl">
                          <input
                            type="radio"
                            name="one"
                            value="Yes"
                            className="mr-3"
                            style={{ width: "20px", height: "20px" }}
                          />
                          Yes
                        </label>
                        <label className="text-xl">
                          <input
                            type="radio"
                            name="one"
                            value="No"
                            className="mr-3"
                            style={{ width: "20px", height: "20px" }}
                          />
                          No
                        </label>
                        <p className="mt-2 opacity-70">
                          You can update your preferences in your Profile at any
                          time
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn bg-black text-white text-xl"
                >
                  Create my free account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
