import {MdOutlineWorkspacePremium} from "react-icons/md";
import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import {TbNewSection} from "react-icons/tb";

export function SkillInfo() {
    return (
        <>
            <section className="space-y-4">
                <div className="flex items-center space-x-2 border-b py-2">
                    <span className="text-3xl">
                        <MdOutlineWorkspacePremium />
                    </span>
                    <h1 className="font-bold text-lg">
                        Skills
                    </h1>
                </div>
                <section className="flex flex-col space-y-4">
                    <div>
                        <Input
                            type="text"
                            placeholder="ReactJS"
                            label="Skill Name"
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            placeholder="Coursera"
                            label="Where did you learn it?"
                        />
                    </div>
                </section>
                <Button
                    icon={<TbNewSection/>}
                    label="Add more experience"
                    className="bg-gray-700 text-white"
                />
            </section>
        </>
    )
}