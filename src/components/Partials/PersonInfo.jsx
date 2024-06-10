import {HiInformationCircle} from "react-icons/hi";
import Input from "../Utils/Input.jsx";
import TextArea from "../Utils/TextArea.jsx";
import Button from "../Utils/Button.jsx";
import {TbNewSection} from "react-icons/tb";

export function PersonInfo() {
    return (
        <>
            <section className="space-y-4">
                <div className="flex items-center space-x-2 border-b py-2">
                    <span className="text-3xl">
                        <HiInformationCircle/>
                    </span>
                    <h1 className="font-bold text-lg">
                        Personal Information
                    </h1>
                </div>
                <div className="flex flex-col space-y-4 border-b">
                    <h4 className="text-md font-bold text-gray-700">
                        Upload your photo
                    </h4>
                    <img
                        src="https://placehold.co/100"
                        className="w-24 h-24 rounded-full object-cover"
                        alt="user-image"
                    />
                    <label className="pb-4">
                        <input type="file" accept="image/png, image/jpeg"/>
                    </label>
                </div>
                <section className="flex flex-col space-y-4">
                    <div>
                        <Input
                            type="text"
                            placeholder="Web Developer"
                            label="Profession"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="text"
                            placeholder="John"
                            label="First Name"
                        />
                        <Input
                            type="text"
                            placeholder="Doe"
                            label="Last Name"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            type="email"
                            placeholder="someone@example.com"
                            label="Email"
                        />
                        <Input
                            type="number"
                            placeholder="1234567890"
                            label="Phone"
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Address"
                            label="Address"
                        />
                    </div>
                    <div>
                        <TextArea label="About me" className="h-24"/>
                    </div>
                </section>
                <Button
                    icon={<TbNewSection/>}
                    label="Add more information"
                    className="bg-gray-700 text-white"
                />
            </section>
        </>
    )
}