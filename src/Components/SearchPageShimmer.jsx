const SearchPageShimmer = () => {
    return (
        <>
            <div className="shimmerBoxes">
                {
                    Array(15)
                    .fill("")
                    .map((e, index) => (
                        <div className="shimmerBox shimmerBox2 rounded-lg" key={index} data-testid="shimmer"></div>
                    ))
                }
            </div>
        </>
    );
}

export default SearchPageShimmer;