import React, { Component } from "react";

class Content extends Component {
    render() {

        function showContent(button) {
            button.target.classList.toggle('active');
            let answer = button.target.nextElementSibling;
            if(answer.style.maxHeight) {
                answer.style.maxHeight = null;
                answer.style.paddingTop = '0';
            } else {
                answer.style.maxHeight = '200px';
                answer.style.paddingTop = '15px';
            }
        }

        return (
            <div>
                <div className="bg-danger text-white pageTitleContainers">
                    <p className={"pageTitles"}>
                        Tek Notes
                    </p>
                </div>
                <div id={'contentSpacers'}>
                    <div className={'contentContainers'}>
                        <div className={'titleContainers'} data-aos={'fade-up'}>
                            <h1 className={'titles'}>Frequently Asked Questions</h1>
                        </div>
                    </div>
                    <div id={'tekContainer'} data-aos={'fade-up'}>
                        <div className={'faqContainer'}>
                            <button onClick={showContent} id={'faq1'} className={'accordion'}>How thick are the coatings applied?<span className={'caret'}> &gt; </span> </button>
                            <div className={'answers'}>
                                <p>PVD tool coatings are typically applied between 2-4 microns. This may vary according to tool type.</p>
                            </div>
                        </div>
                        <div className={'faqContainer'}>
                            <button onClick={showContent} className={'accordion'}>What is the temperature of the coating process?<span className={'caret'}> &gt; </span> </button>
                            <div className={'answers'}>
                                <p>Swiss-Tek applies tool coatings at 450&#176;C under a high vacuum.
                                </p>
                            </div>
                        </div>
                        <div className={'faqContainer'}>
                            <button onClick={showContent} className={'accordion'}>What are the requirements for materials to be coated?<span className={'caret'}> &gt; </span> </button>
                            <div className={'answers'}>
                                <p>- The part must be stable at 450&#176;C under high vacuum <br/>
                                   - The part must be electrically conductive <br/>
                                   - The part must have a chemically active surface and be free of any prior surface treatments
                                    (heat treat scale, black oxide, plating, or paint). <br/>
                                    Please see our Surface Preparation Guidelines</p>
                            </div>
                        </div>
                        <div className={'faqContainer'}>
                            <button onClick={showContent} className={'accordion'}>What materials can be coated?<span className={'caret'}> &gt; </span> </button>
                            <div className={'answers'}>
                                <p>
                                    All carbides and HSS (M-series and T-series) including powder metal types.
                                    Tool, Die, and Mold steels may be coated if they have been properly
                                    tempered prior to coating. Other materials are possible, please inquire.
                                </p>
                            </div>
                        </div>
                        <div className={'faqContainer'}>
                            <button onClick={showContent} className={'accordion'}>My tool is undersized, can I coat it to bring it into tolerance?<span className={'caret'}> &gt; </span> </button>
                            <div className={'answers'}>
                                <p>PVD tool coatings are extremely thin, typically 2-4 microns (or 0.0001") thick and
                                    are not recommended for salvaging tools.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Content;