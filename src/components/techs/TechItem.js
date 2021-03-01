import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from "../../Actions/TechActions";
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = ({ tech, deleteTech }) => {
    const onDelete = (id) => {
        deleteTech(tech.id);
        M.toast({ html: `${tech.firstName} ${tech.lastName} deleted from techs` });
    }

    return (
        <li className='collection-item'>
            <div>
                {tech.firstName} {tech.lastName}
                <a href='#!' className='secondary-content' onClick={onDelete}>
                    <i className='material-icons grey-text'>delete</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem);
