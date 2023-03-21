const Shimmer = () => {
    return (
        <>
            <div className="shimmerBoxes">
                {
                    Array(15)
                    .fill("")
                    .map((e, index) => (
                        <div className="shimmerBox rounded-lg" key={index} data-testid="shimmer"></div>
                    ))
                }
            </div>
        </>
    );
}

export default Shimmer;