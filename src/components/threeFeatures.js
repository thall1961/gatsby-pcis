import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
    display: inline-block;
    width: 100%;
    margin-top: 50px;
    transition: all 0.3s;
    padding: 1rem;

    &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        cursor: default;
    }
`;

const Left = styled.div`
    width: 15%;
    float: left;
`;

const Right = styled.div`
    width: 85%;
    float: right;
`;

const threeFeatures = () => {
    return (
        <div className="container my-2 py-2">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    <Cell>
                        <Left>
                            <img
                                src="https://www.pcisgold.com/hs-fs/hubfs/EHR%20Product%20Page%20Icons/Patient%20Health%20Record.png?width=30&name=Patient%20Health%20Record.png"
                                alt=""
                                width="30"
                            />
                        </Left>
                        <Right>
                            <h2 className="h6">Patient Health Record</h2>
                            <p>
                                Quickly find any information about a patient’s
                                health history.
                            </p>
                        </Right>
                    </Cell>
                </div>
                <div className="col-12 col-md-4">
                    <Cell>
                        <Left>
                            <img
                                src="https://www.pcisgold.com/hs-fs/hubfs/EHR%20Product%20Page%20Icons/eTasking.png?width=30&name=eTasking.png"
                                alt=""
                                width="30"
                            />
                        </Left>
                        <Right>
                            <h2 className="h6">e-Tasking</h2>
                            <p>
                                Don’t let labs, charts, or any tasks go missing.
                            </p>
                        </Right>
                    </Cell>
                </div>
                <div className="col-12 col-md-4">
                    <Cell>
                        <Left>
                            <img
                                src="https://www.pcisgold.com/hs-fs/hubfs/EHR%20Product%20Page%20Icons/Charting.png?width=30&name=Charting.png"
                                alt=""
                                width="30"
                            />
                        </Left>
                        <Right>
                            <h2 className="h6">Customized Charting</h2>
                            <p>
                                Let your physicians customize their charting
                                experience with point-and-click or form-based
                                data entry.
                            </p>
                        </Right>
                    </Cell>
                </div>
            </div>
        </div>
    );
};

export default threeFeatures;
