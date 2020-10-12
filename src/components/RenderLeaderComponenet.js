import React from 'react';
import { Media } from 'reactstrap';

function RenderLeader(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <Media left href="#">
                            <Media object src={leader.image} alt={leader.name} />
                        </Media>
                    </div>
               
                    <div className="col">
                        <Media body>
                            <Media heading>
                                {leader.name}
                            </Media>
                            {leader.designation}
                            <br /><br />
                            {leader.description}
                        </Media>
                    </div>
                </div>

                <br />
            </div>
        );
    });

    return (
        <div>
            {leaders}
        </div>
    );
}

export default RenderLeader;