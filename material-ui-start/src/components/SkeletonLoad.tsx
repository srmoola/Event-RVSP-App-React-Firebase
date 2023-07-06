import Skeleton from '@mui/material/Skeleton';

const skeletonStyles = { marginLeft: "10px", width: { xl: "45%", md: "45%", xs: "95%" } };

const SkeletonLoad = () => {
    return (<div key={crypto.randomUUID()} style={{ position: "relative", width: "100%", height: "375px", marginTop: "20px" }}>

        <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{ position: "absolute", top: 0, left: 0 }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
            <br />
            <Skeleton animation="wave" variant="text" width="20rem" height="50px" sx={{ marginLeft: "10px" }} />
            <Skeleton animation="wave" variant="text" width="10rem" height="35px" sx={{ marginLeft: "10px" }} />
            <br />
            <Skeleton animation="wave" variant="text" height="35px" sx={skeletonStyles} />
            <Skeleton animation="wave" variant="text" height="35px" sx={skeletonStyles} />
            <Skeleton animation="wave" variant="text" height="35px" sx={skeletonStyles} />
            <br /><br /><br /> <br />
            <Skeleton animation="wave" variant="rectangular" width="200px" height="50px" sx={{ marginLeft: "10px" }} />
        </div>
    </div>)
}

export default SkeletonLoad;