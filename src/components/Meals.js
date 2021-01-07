import React from 'react';
import {PropTypes} from 'prop-types';

function Meals({name, date}) {


    return (
        <div className="col-xs-12  col-sm-12 col-md-12 col-lg-12">
            <ol id="list">
                <div>
                    <li className="morning">{`Breakfast for ${name} on ${date}`}</li>
                    <li className="afternoon">{`Lunch for ${name} on ${date}`}</li>
                    <li className="night">{`Dinner for ${name} on ${date}`}</li>
                </div>
            </ol>
        </div>
    );
}
export default Meals;
