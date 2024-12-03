export const onFlipAllCard = (params:any) => {
    const {changeGPDOnline} = params;

    changeGPDOnline({
        isAllFlipCard: true
    });
};