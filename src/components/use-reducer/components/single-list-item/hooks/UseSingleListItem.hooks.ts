

const UseSingleListItem = (id:string, onClickHandler: any) => {
    const handleOnClick = () => onClickHandler({
        id,
        type: 'REMOVE'
    });

    return {
        handleOnClick
    }
}

export default UseSingleListItem;