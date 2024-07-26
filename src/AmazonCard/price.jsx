export default function Price({ oldprice, newprice }) {
    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",
    }
    let oldstyles = {
        textDecorationLine:"line-through"
    }
    let newstyles = {
        fontWeight:"bold",
    }
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldprice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{newprice}</span>
        </div>
    );

    
}
