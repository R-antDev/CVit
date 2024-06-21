import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import {TbNewSection} from "react-icons/tb";
import {SiWheniwork} from "react-icons/si";
import PropTypes from "prop-types";

export function PlatformForm({personInfo, setPersonInfo}) {

    const handlePlatformChange = (index, e) => {
        const {name, value} = e.target;

        setPersonInfo((prevState) => {
            const updatedPlatform = [...prevState.platforms];
            updatedPlatform[index] = {
                ...updatedPlatform[index],
                [name]: value,
            };
            return {...prevState, platforms: updatedPlatform};
        });
    };

    const addPlatformEntry = () => {
        setPersonInfo((prevState) => ({
            ...prevState,
            platforms: [
                ...prevState.platforms,
                {
                    username: "",
                    platform: "",
                    profile_link: function () {
                        return `https://${this.platform}.com/${this.username}`;
                    },
                }
            ],
        }));
    };

    return (
        <>
            <section className="space-y-4">
                <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <SiWheniwork/>
          </span>
                    <h1 className="font-bold text-lg">Professional Platforms</h1>
                </div>
                <section className={'divide-y divide-blue-400 divide-dashed'}>
                    {
                        personInfo.platforms.map((platform, index) => (
                            <div key={index} className="flex flex-col py-4 space-y-4">
                                <div>
                                    <
                                        Input type="text"
                                              placeholder="antDev"
                                              label={`Username - ${index + 1}`}
                                              name="username"
                                              value={platform.username}
                                              onChange={(e) => handlePlatformChange(index, e)}
                                    />
                                </div>
                                <div>
                                    <
                                        Input type="text"
                                              placeholder="github"
                                              label= {`Platform`}
                                              name="platform"
                                              value={platform.platform}
                                              onChange={(e) => handlePlatformChange(index, e)}/>
                                </div>
                            </div>
                        ))
                    }
                </section>
                <Button
                    icon={<TbNewSection/>}
                    label="Add more platform"
                    className="bg-gray-700 text-white"
                    onClick={addPlatformEntry}
                />
            </section>
        </>
    );
}

PlatformForm.propTypes = {
    personInfo: PropTypes.object,
    setPersonInfo: PropTypes.func,
};