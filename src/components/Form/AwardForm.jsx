import Input from "../Utils/Input.jsx";
import Button from "../Utils/Button.jsx";
import {TbNewSection} from "react-icons/tb";
import {GiTrophyCup} from "react-icons/gi";
import PropTypes from "prop-types";

export function AwardForm({personInfo, setPersonInfo}) {

    const addAwardEntry = () => {
        setPersonInfo(prevState => ({
            ...prevState,
            awards: [
                ...prevState.awards,
                {institution: "", award: "", year: ""}
            ]
        }));
    };

    const handleAwardChange = (index, e) => {
        const {name, value} = e.target;

        setPersonInfo(prevState => {
            const updatedAwards = [...prevState.awards];
            updatedAwards[index] = {
                ...updatedAwards[index],
                [name]: value
            };

            return {...prevState, awards: updatedAwards};
        });
    };

    return (
        <>
            <section className="space-y-4">
                <div className="flex items-center space-x-2 border-b py-2">
          <span className="text-3xl">
            <GiTrophyCup/>
          </span>
                    <h1 className="font-bold text-lg">Awards</h1>
                </div>
                <section className={'divide-y-2 divide-blue-400 divide-dashed'}>
                    {personInfo.awards.map((award, index) => (
                        <div key={index} className="flex flex-col py-4 space-y-4">
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Best Backend Engineer Award"
                                    label={`Award - ${index + 1}`}
                                    name="award"
                                    value={award.award}
                                    onChange={(e) => handleAwardChange(index, e)}
                                />
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    placeholder="ABC Contest"
                                    label="Institution"
                                    name="institution"
                                    value={award.institution}
                                    onChange={(e) => handleAwardChange(index, e)}
                                />
                            </div>
                            <div>
                                <Input
                                    type="number"
                                    label="Year"
                                    placeholder="2022"
                                    name="year"
                                    value={award.year}
                                    onChange={(e) => handleAwardChange(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                </section>
                <Button
                    icon={<TbNewSection/>}
                    label="Add more award"
                    className="bg-gray-700 text-white"
                    onClick={addAwardEntry}
                />
            </section>
        </>
    );
}

AwardForm.propTypes = {
    personInfo: PropTypes.object.isRequired,
    setPersonInfo: PropTypes.func.isRequired
};
