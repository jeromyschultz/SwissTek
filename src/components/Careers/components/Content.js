import React, { Component } from "react";

class Content extends Component {
    render() {
        return (
            <div>
                <div className="bg-danger text-white pageTitleContainers">
                    <p className={"pageTitles"}>
                        Careers
                    </p>
                </div>
                <div className={'contentSpacers'}>
                    <div className={'contentContainers'}>
                        <div className={'titleContainers'} data-aos={'fade-up'}>
                            <h1 className={'titles'}>Company Culture</h1>
                        </div>
                        <div className={'text'} data-aos={'fade-up'}>
                            <p>The corporate culture and employee relations philosophy of Swiss Tek Coatings, Inc.
                                is based upon the principles of respect, integrity and open communication, recognizing
                                that each individual member of our team is a valuable contributor to the overall success
                                of the company.</p>
                            <p>This philosophy starts with the company two founders and is fostered throughout the
                                organization. We recognize that in order for the goals of the organization to be
                                achieved and to provide our customers with quality coatings and exceptional service,
                                the needs of the internal customer, our employees, must be met. To this end, Swiss Tek
                                Coatings, Inc. is committed to providing a work environment that values the
                                contributions of every employee, offers a competitive benefit and wage package,
                                continuous training, safe working conditions - all rooted in a strong desire to hire
                                and retain the most qualified and capable workforce.</p>
                            <p>Communication and information exchange is an essential element for any organization.
                                Swiss Tek Coatings, Inc. strives to keep the lines of communication open so that
                                information is readily available to employees. In this way, we are able to have an
                                exchange of ideas that invites individual contributions. Employees and customers
                                interact in every area of our business.</p>
                            <p>Respect, integrity, communication, and commitment to meeting the needs of our
                                "employee customers" are all part of the corporate culture and employee relations
                                attitude that permeates the work environment at Swiss Tek Coatings, Inc. It takes the
                                commitment of everyone to achieve the organizations goals. Our employees are the core
                                element of our success, and we value our employees.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;