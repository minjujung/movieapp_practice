import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    :not(:last-child) {
        margin-bottom: 50px;
    }
`;

const Title = styled.span`
    font-size: 24px;
    font-weight: 700;
`;

const Grid = styled.div`
    margin-top: 20px;
`;

const Section = ({ title, children }) => {
    return(
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Section;