import React, {Component} from "react";
import stWay from "../../../images/stWay.PNG";
import compWay from "../../../images/compWay.PNG";
import map from "../../../images/map.PNG";


class Content extends Component{
    render() {
        return(
            <div>
                <div className="bg-danger text-white pageTitleContainers">
                    <p className={"pageTitles"}>
                        About Us
                    </p>
                </div>
                <div className={'contentSpacers'}>
                    <div className={'contentContainers'}>
                        <div className={'titleContainers'} data-aos={'fade-up'}>
                            <h1 className={'titles'}>Background</h1>
                        </div>
                        <div className={'text'} data-aos={'fade-up'}>
                            <div id={'backgroundTextContainer'}>
                                <p id={'backgroundText'}>Swiss-Tek Coatings was established in 2000 to provide the
                                    highest quality PVD coatings for tooling and wear parts.
                                    Swiss-Tek utilizes state-of-the-art equipment in all areas of
                                    processing, from cleaning to coating and quality assurance.
                                    All batches are coated with absolute uniformity, ensuring
                                    the repeatability of the coating's quality and performance.
                                </p>
                            </div>
                        </div>
                        <div className={'titleContainers'} data-aos={'fade-up'}>
                            <h1 className={'titles'}>Our Way</h1>
                        </div>
                        <div className={'text'} id={'ourWayContainer'} data-aos={'fade-up'}>
                            <div id={'ourWayCaptionContainer'}>
                                <p>With high-volume coating, job coaters apply the same coating to all parts
                                    in the batch, regardless of their type or application.
                                    Swiss-Tek applies dedicated coatings optimized for each application.
                                    Small batch sizes ensure fast turn-around times.</p>
                            </div>
                            <div id={'ourWayImageContainer'}>
                                <img id={'ourWayImage'} src={stWay} alt={''}/>
                            </div>
                        </div>
                        <div className={'titleContainers'} data-aos={'fade-up'}>
                            <h1 className={'titles'}>Competition's Way</h1>
                        </div>
                        <div className={'text'} id={'compWayContainer'} data-aos={'fade-up'}>
                            <div id={'compWayImageContainer'}>
                                <img id={'compWayImage'} src={compWay} alt={''}/>
                            </div>
                            <div id={'compWayCaptionContainer'}>
                                <p>In industrial mass coating, different types of objects are often
                                    coated together. While high volumes may raise profitability, coating performance
                                    often suffers. Also, process times are often much longer than with smaller quantities.
                                </p>
                            </div>
                        </div>
                        <div className={'titleContainers'} data-aos={'fade-up'}>
                            <h1 className={'titles'}>Coating Requirements</h1>
                        </div>
                        <div className={'text'} data-aos={'fade-up'}>
                            <div id={'requirementsContainer'}>
                                <p>&#8594; PVD tool coatings are typically applied between 2-4 microns.
                                    This may vary according to tool type<br/>
                                    &#8594; PVD coatings are applied at a temperature of 450 °C /
                                    840 °F under a high vacuum <br/>
                                    &#8594; All carbides and HSS (M-series and T-series) including
                                    powder metal types. Tool, die, and mold steels may be
                                    coated if they have been properly tempered prior to
                                    coating. Other materials are possible, please inquire

                                    </p>
                            </div>
                        </div>
                        <div className={'titleContainers'} data-aos={'fade-up'}>
                            <h1 className={'titles'}>Location</h1>
                        </div>
                        <div className={'text'} id={'locationContainer'} data-aos={'fade-up'}>
                            <div id={'locationImageContainer'}>
                                <img id={'map'} src={map} alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


export default Content;