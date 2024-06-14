
export const withLoadingIndicator = (Component, isLoading) => {
    return (props) => {
        if (isLoading) {
            return (
                <h2>Loading...</h2>
            );
        } else return <Component {...props}/>;
    }
}