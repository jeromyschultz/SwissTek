import React, {Component} from "react";
import bit from '../../../images/bit.png';
import "../HomeStyle.css"

class Content extends Component{
    render() {

        return (
            <div>
                <div id={"homeImageContainer"}>
                    <img id={"bitImage"} src={bit} alt={"bit"}/>
                    <div className={"textBlock"}>
                        <h1 id={"imageHeader"}>The Swiss-Tek Advantage</h1>
                        <h4 id={"imageCaption"}>Swiss-Tek applies dedicated coatings optimized for each application. <br/> Small batch sizes ensure fast turn-around times</h4>
                        <a href={"/aboutus"}><button id={"learnMoreButton"} type="button" className="btn btn-danger">Learn More</button></a>
                    </div>
                </div>
                <div id={"coatingAdvantagesContainer"}  data-aos={"fade-left"}>
                    <p id={"coatingAdvantagesP"}>
                        Swiss-Tek Coatings utilizes the highest standard of modern coating technology for coating
                        cold and hot work steel, high speed steel (HSS) and tungsten carbides. All batches are coated
                        with absolute uniformity, ensuring the repeatability of the coating's quality and performance.
                    </p>
                    <div id={"underlineContainer"}>
                        <a id={'coatingInfoLearnMore'} href={"/coatinginfo"}> Learn More About Our Coating Technology &#8594;</a>
                    </div>
                </div>
                <div>

                </div>
            </div>

        )
    }
}

export default Content;
