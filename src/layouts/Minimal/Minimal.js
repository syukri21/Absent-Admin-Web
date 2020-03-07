import PropTypes from "prop-types"

const Minimal = props => {
    const { children } = props

    return children
}

Minimal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
}

export default Minimal
