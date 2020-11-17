import React, { Component } from "react";
import TiN from "../../../images/TiN.PNG";
import TiCN from "../../../images/TiCN.PNG";
import TiCNMP from "../../../images/TICNMP.PNG";
import TiALN from "../../../images/TiALN.PNG";
import ALTiN from "../../../images/ALTiN.PNG";
import CrN from "../../../images/CrN.PNG";
import CBC from "../../../images/CBC.PNG";
import ZrN from "../../../images/ZrN.PNG";


class Content extends Component{

    render() {

        let tabs = document.getElementsByClassName("tabs");

        let tabContent = document.getElementsByClassName("tabcontent");

        for(let i = 0; i < tabs.length; i++){
            tabs[i].addEventListener('click', openTabs, false);
        }

        function openTabs(tab) {

            let method = tab.currentTarget.dataset.method;
            for(let i = 0; i < tabs.length; i++){
                tabs[i].classList.remove("active");
                tabContent[i].classList.remove("active");
            }

            document.getElementById(method).classList.add("active");
            tab.currentTarget.classList.add("active");
        }


        return (
            <div>
                <div className="bg-danger text-white pageTitleContainers">
                    <p className={"pageTitles"}>
                        Coating Information
                    </p>
                </div>
                <div className={'titleSpacers'} data-aos={'fade-up'}>
                    <div className={"titleContainers"}>
                        <h1 className={"titles"}>Coating Applications</h1>
                    </div>
                </div>
                <div id={'tabSpacer'} data-aos={'fade-up'}>
                    <div id={'tabContainer'}>
                        <button onClick={openTabs} className={'tabs active'} data-method={'cutting'}><p>Cutting</p></button>
                        <button onClick={openTabs} className={'tabs'} data-method={'punching'}><p>Punching</p></button>
                        <button onClick={openTabs} className={'tabs'} data-method={'forming'}><p>Forming</p></button>
                        <button onClick={openTabs} className={'tabs'} data-method={"injectionMolding"}><p>Injection Molding</p></button>
                        <button onClick={openTabs} className={'tabs'} data-method={"tribology"}><p>Tribology</p></button>
                    </div>
                    <div id={'tabContentContainer'}>
                        <div id={"cutting"} className={"tabcontent active"}>
                            <p>
                                Swiss-Tek hard coatings reduce the abrasive and crater wear on the tools for conventional
                                wet, dry and High Speed Machining. Modern coating technology ensures smooth coatings, which
                                reduce the friction between chip and tool.
                            </p>
                        </div>
                        <div id={"punching"} className={"tabcontent"}>
                            <p>
                                Swiss-Tek Coatings provide an increase in tool life through the reduction of friction
                                and material transfer on punches, molds and dies.
                            </p>
                        </div>
                        <div id={"forming"} className={"tabcontent"}>
                            <p>
                                In forming techniques as extrusion, molding, deep-drawing, coining, and bending, Swiss-Tek
                                hard coatings reduce friction, groove wear and built-up edges.
                                Repolishing of functional surfaces is not necessary in most cases.
                            </p>
                        </div>
                        <div id={"injectionMolding"} className={"tabcontent"}>
                            <p>
                                The homogenous Swiss-Tek hard coatings increase productivity for plastic forming and
                                forming machine components with better ejectibility and lower wear. Roughness and surface
                                structure influence release properties from the mold and allow shorter cycle times.
                                For mirror-like surfaces, repolishing may be recommended. Because all PVD coating processes
                                are "line-of-sight", there are limitations when coating deep holes and slots.
                            </p>
                        </div>
                        <div id={"tribology"} className={"tabcontent"}>
                            <p>
                                Swiss-Tek hard coatings solve tribological problems with machine components that can be
                                coated at temperatures of 200-500&#176;C. With the high hardness of the coatings (up to 38 GPa),
                                friction properties are substantially improved. This leads to higher functional reliability
                                of dry operations, and environmentally harmful coolants and lubricants can be replaced.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'titleSpacers'} data-aos={'fade-up'}>
                    <div id={'captionContainer'} className={"titleContainers"}>
                        <h1 className={'titles'} >Coating Types</h1>
                        <p>Swiss-Tek Coatings offers an optimal coating for every application. The three "base"
                            coatings - TiN, TiCN, and TiAIN - currently make up more than 90% of the world's coating market.</p>
                    </div>
                </div>

                <div className={"typeCoatingsContainer"}><h1 className={'typeCoatingsTitle'}>Standard Coatings</h1></div>
                <div className={"typesContainer"}>
                    <div className={'cardsContainer'} >
                        <div className={'cards'} data-aos={'fade-left'}>
                            <img className={'cardImages'} src={TiN} alt={''}/>
                            <div>
                                <h3>TiN</h3>
                                <p>The general-purpose coating for cutting, forming, injection molding as well as
                                    tribological applications.</p>
                            </div>
                        </div>
                        <div className={'cards'} data-aos={'fade-right'}>
                            <img className={'cardImages'} src={TiCN} alt={''}/>
                            <div>
                                <h3>TiCN</h3>
                                <p>Conventional carbon nitride coating:</p>
                                <ul>
                                    <li>For interrupted cutting</li>
                                    <li>For Milling and tapping</li>
                                    <li>For stamping, punching, and forming</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={'cardsContainer'}>
                        <div className={'cards'} data-aos={'fade-left'}>
                            <img className={'cardImages'} src={TiCNMP} alt={''}/>
                            <div>
                                <h3>TiCN-MP</h3>
                                <p>The tough MultiPurpose coating for interrupted cutting, milling, tapping, stamping,
                                    forming and hobbing.</p>
                            </div>
                        </div>
                        <div className={'cards'} data-aos={'fade-right'}>
                            <img className={'cardImages'} src={TiALN} alt={''}/>
                            <div>
                                <h3>TiALN</h3>
                                <p>The new universal high-performance coating for cutting
                                    (drilling, milling, <br/> reaming, turning). Also suitable for dry machining.</p>
                            </div>
                        </div>
                    </div>
                    <div className={"cardsContainer"} id={"lastCardContainer"}>
                        <div className={'cards'} id={"lastCard"} data-aos={'fade-up'}>
                            <img className={'cardImages'} src={ALTiN} alt={''}/>
                            <div>
                                <h3>ALTiN</h3>
                                <p>Special high-performance coating for dry high
                                    speed machining. AlTiN performance surpasses <br/> all
                                    conventional coatings when machining cast iron
                                    and hardened steel.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"typeCoatingsContainer"}><h1 className={'typeCoatingsTitle'}>Specialty Coatings</h1></div>
                <div className={"typesContainer"}>
                    <div className={'cardsContainer'} >
                        <div className={'cards'} data-aos={'fade-left'}>
                            <img className={'cardImages'} src={CrN} alt={''}/>
                            <div>
                                <h3>CrN</h3>
                                <p>Coating for forming applications:</p>
                                <ul>
                                    <li>For molds and dies and machine components</li>
                                    <li>Optimum release for forming tools</li>
                                    <li>Low deposition temperature possible
                                        (approx. 250 °C / 480 °F)</li>
                                </ul>
                            </div>
                        </div>
                        <div className={'cards'} data-aos={'fade-right'}>
                            <img className={'cardImages'} src={CBC} alt={''}/>
                            <div>
                                <h3>CBC</h3>
                                <p>Special gradient coating. Self-lubrication as its own
                                    coating or on the top of an appropriate hard coating.
                                </p>
                                <ul>
                                    <li>CBC: carbon-based coating</li>
                                    <li>DLC: diamond-like carbon</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"cardsContainer"} id={"lastCardContainer"}>
                        <div className={'cards'} id={"lastCard"} data-aos={'fade-up'}>
                            <img className={'cardImages'} src={ZrN} alt={''}/>
                            <div>
                                <h3>ZrN</h3>
                                <p>Special-purpose monolayer coating. Effectively
                                    reduces the built-up edge when machining
                                    aluminum and titanium alloys.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'titleSpacers'} data-aos={'fade-up'}>
                    <div className={"titleContainers"}>
                        <h1 className={'titles'} >Coating Properties</h1>
                    </div>
                </div>
                <div className={"tableContainer"} data-aos={'fade-up'}>
                    <table id={'coatingPropTable'}>
                        <tr>
                            <th>Coating Properties</th>
                            <th colSpan={9} id={'arcHeader'}>Cathodic Arc</th>
                            <th className={'nano'}>Nano-tek</th>
                            <th className={'nano'}>Nano-tek/CR</th>
                        </tr>
                        <tr>
                            <td>Coating Material</td>
                            <td>TiN<sup>1</sup></td>
                            <td>TiCN</td>
                            <td>TiCN-MP</td>
                            <td>TiAlCN</td>
                            <td>TiAlN</td>
                            <td>AlTiN</td>
                            <td>ZrN</td>
                            <td>CrN</td>
                            <td>CBC</td>
                            <td>AlTiN/Si<sub>3</sub>N<sub>4</sub></td>
                            <td>AlCrN/Si<sub>3</sub>N<sub>4</sub></td>
                        </tr>
                        <tr>
                            <td>Coating Structure</td>
                            <td>Mono-layer</td>
                            <td>Gradient</td>
                            <td>Gradient</td>
                            <td>Gradient</td>
                            <td>Multilayer</td>
                            <td>Gradient</td>
                            <td>Mono-layer</td>
                            <td>Mono-layer</td>
                            <td>Gradient</td>
                            <td>Nano-Composite</td>
                            <td>Nano-Composite</td>
                        </tr>
                        <tr>
                            <td>Nanohardness (GPa)</td>
                            <td>24</td>
                            <td>37</td>
                            <td>32</td>
                            <td>28</td>
                            <td>28</td>
                            <td>38</td>
                            <td>20</td>
                            <td>18</td>
                            <td>20</td>
                            <td>45</td>
                            <td>42</td>
                        </tr>
                        <tr>
                            <td>Friction (fretting) Coefficient</td>
                            <td>0.55</td>
                            <td>0.2</td>
                            <td>0.2</td>
                            <td>0.3</td>
                            <td>0.6</td>
                            <td>0.7</td>
                            <td>0.4</td>
                            <td>0.3</td>
                            <td>0.15</td>
                            <td>0.45</td>
                            <td>0.35</td>
                        </tr>
                        <tr>
                            <td>Coating Thickness (depends on application)</td>
                            <td>1-5</td>
                            <td>1-4</td>
                            <td>1-4</td>
                            <td>1-4</td>
                            <td>1-4</td>
                            <td>1-3</td>
                            <td>1-4</td>
                            <td>1-4</td>
                            <td>0.5-1.5</td>
                            <td>1-4</td>
                            <td>1-5</td>
                        </tr>
                        <tr>
                            <td>Maximum Working Temperature</td>
                            <td> 600&#176; C <br/> (1110&#176; F)</td>
                            <td> 400&#176; C <br/> (750&#176; F)</td>
                            <td> 400&#176; C <br/> (750&#176; F)</td>
                            <td> 500&#176; C <br/> (930&#176; F)</td>
                            <td> 700&#176; C <br/> (1290&#176; F)</td>
                            <td> 900&#176; C <br/> (1650&#176; F)</td>
                            <td> 550&#176; C <br/> (1020&#176; F)</td>
                            <td> 700&#176; C <br/> (1290&#176; F)</td>
                            <td> 400&#176; C <br/> (750&#176; F)</td>
                            <td> 1200&#176; C <br/> (2190&#176; F)</td>
                            <td> 1100&#176; C <br/> (2010&#176; F)</td>
                        </tr>
                        <tr>
                            <td>Coating Color</td>
                            <td id={'goldenYellow'}>Golden<br/>Yellow</td>
                            <td id={'blueGray'}>Blue<br/>Gray</td>
                            <td id={'lightRed'}>Light<br/>Red</td>
                            <td id={'reddishCopper'}>Reddish<br/>Copper</td>
                            <td id={'violet'}>Violet</td>
                            <td id={'blueBlack'}>Blue<br/>Black</td>
                            <td id={'paleYellow'}>Pale<br/>Yellow</td>
                            <td id={'silver'}>Silver</td>
                            <td id={'charcoalGray'}>Charcoal<br/>Gray</td>
                            <td id={'blueBlack'}>Blue<br/>Black</td>
                            <td id={'silverGray'}>Silver<br/>Gray</td>
                        </tr>
                    </table>
                </div>
                <div className={'tableCaptionSpacer'} data-aos={'fade-up'}>
                    <div className={'tableCaption'}>
                        <p>- Standard coating temperature is 475&#176; C (890&#176; F)</p>
                        <p>- <sup>1</sup> Special Low temperature process available. Please inquire</p>
                    </div>
                </div>
                <div className={'titleSpacers'} data-aos={'fade-up'}>
                    <div className={"titleContainers"}>
                        <h1 className={'titles'} >Coating Applications</h1>
                    </div>
                </div>

                <div className={'tableContainer'} data-aos={'fade-up'}>
                    <table id={'applicationsTable'}>
                        <tr>
                            <th rowSpan={2}>Workpiece Material</th>
                             <th colSpan={10}>Application</th>
                        </tr>
                        <tr>
                            <th>Drilling</th>
                            <th>Turning</th>
                            <th>Milling</th>
                            <th>Tapping</th>
                            <th>Reaming</th>
                            <th>Broaching</th>
                            <th>Stamping</th>
                            <th>Deep Drawing</th>
                            <th>Forming</th>
                            <th>Injection Molding</th>
                        </tr>
                        <tr>
                            <td>Steel:<br/>General Types</td>
                            <td>AlTiN<br/>TiAlN</td>
                            <td>AlTiN<br/>TiAlN</td>
                            <td>AlTiN<br/>Nano-Tek/Cr</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiAlN<br/>TiCN-MP</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiN<br/>CrN</td>
                        </tr>
                        <tr>
                            <td>Alloyed Steel:<br/>- Tool Steels<br/>
                            - Stainless Steels<br/>- Super-Alloys(Ni-based)</td>
                            <td>Nano-Tek/Cr<br/>AlTiN</td>
                            <td>Nano-Tek<br/>AlTiN</td>
                            <td>Nano-Tek<br/>AlTiN</td>
                            <td>TiCN-MP<br/>TiAlN</td>
                            <td>TiAlN<br/>TiCN-MP</td>
                            <td>TiCN-MP<br/>TiAlN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiN<br/>CrN</td>
                        </tr>
                        <tr>
                            <td>Mg-Alloys</td>
                            <td>AlTiN<br/>TiAlN</td>
                            <td>AlTiN<br/>TiAlN</td>
                            <td>AlTiN<br/>TiAlN</td>
                            <td>TiCN-MP<br/>TiAlN</td>
                            <td>TiAlN<br/>TiCN-MP</td>
                            <td>TiCN-MP<br/>TiAlN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiCN-MP<br/>TiN</td>
                            <td>TiN<br/>CrN</td>
                        </tr>
                        <tr>
                            <td>Cast Iron</td>
                            <td>Nano-Tek<br/>AlTiN</td>
                            <td>Nano-Tek<br/>AlTiN</td>
                            <td>Nano-Tek<br/>TiCN-MP</td>
                            <td>TiAlN<br/>TiCN-MP</td>
                            <td>TiAlN<br/>TiCN-MP</td>
                            <td>TiAlN<br/>TiCN-MP</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                        </tr>
                        <tr>
                            <td>Ti-Alloys</td>
                            <td>Nano-Tek<br/>ZrN</td>
                            <td>Nano-Tek<br/>ZrN</td>
                            <td>Nano-Tek<br/>ZrN</td>
                            <td>ZrN<br/>TiCN-MP</td>
                            <td>ZrN</td>
                            <td>ZrN</td>
                            <td>ZrN</td>
                            <td>ZrN</td>
                            <td>ZrN</td>
                            <td>TiN<br/>CrN</td>
                        </tr>
                        <tr>
                            <td>Al-Alloys</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>ZrN<br/>CBC</td>
                            <td>TiN<br/>CrN</td>
                        </tr>
                        <tr>
                            <td>Copper</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                            <td>CrN</td>
                        </tr>
                        <tr>
                            <td>Bass / Bronze</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>TiCN<br/>TiCN-MP</td>
                            <td>CrN<br/>TiN</td>
                        </tr>
                        <tr>
                            <td>Plastics</td>
                            <td>TiCN-MP<br/>TiCN</td>
                            <td>TiCN-MP<br/>TiCN</td>
                            <td>TiCN-MP<br/>TiCN</td>
                            <td>TiCN-MP<br/>TiCN</td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td>TiN<br/>CrN</td>
                        </tr>
                    </table>
                </div>
                <div className={'tableCaptionSpacer'} data-aos={'fade-up'}>
                    <div className={'tableCaption'}>
                        <p> - Recommendations are based on general machining conditions.
                            Performance may be significantly influenced by factors such as rigidity of machine
                            and setup, tool substrate, coolant conditions, etc.</p>
                    </div>
                </div>
                <div className={"titleSpacers"} data-aos={'fade-up'}>
                    <div className={"titleContainers"}>
                        <h1 className={'titles'} >Lead Times</h1>
                    </div>
                </div>
                <div className={'tableContainer'} data-aos={'fade-up'}>
                    <table id={'leadTimesTable'}>
                        <tr>
                            <th>Received at Swiss-Tek</th>
                            <th>TiAlN, AlTiN, AlTiN/Si<sub>3</sub>N<sub>4</sub>, TiN, ZrN
                            <br/>2 Working Days Ship Day</th>
                            <th>TiCN-MP, TiCN, AlCrN/Si<sub>3</sub>N<sub>4</sub><br/>
                            3 Working Days Ship Day</th>
                            <th>TiAlCN, CrN, CBC<br/>
                            4 Working Days Ship Day</th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                            <td>Wednesday</td>
                            <td>Thursday</td>
                            <td>Friday</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>Thursday</td>
                            <td>Friday</td>
                            <td>Monday</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>Friday</td>
                            <td>Monday</td>
                            <td>Tuesday</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>Monday</td>
                            <td>Tuesday</td>
                            <td>Wednesday</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>Tuesday</td>
                            <td>Wednesday</td>
                            <td>Thursday</td>
                        </tr>
                    </table>
                </div>
                <div className={'tableCaptionSpacer'}>
                    <div className={'tableCaption'} data-aos={'fade-up'}>
                        <p>- Weekends and holidays are not counted as working days <br/>
                            - Add 1 additional day for double ended tools <br/>
                            - Add 1 additional day for each additional coating layer on the same tool <br/>
                            - Orders with multiple coating types will use the longest lead time <br/>
                            - Add 1 day for orders with Edge-Prep, Pre-Polish or Post-Polish unless the lead time is 4 working days <br/>
                            - Add 1 day for brazed tools</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default Content;

