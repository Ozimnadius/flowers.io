const smartgrid = require('smart-grid');

smartgrid('./css/layout', {
    mobileFirst: false,
    columns: 24,
    offset: "20px",
    outputStyle: "scss",
    container: {
        maxWidth: "1380px",
        fields: "10px",
        containerWidth: "1380px"
    },
    breakPoints: {
        lg: {
            width: "1379.99px",
            fields: "20px",
            containerWidth: "770px"
        },
        md: {
            width: "991.99px",
            fields: "20px",
            containerWidth: "770px"
        },
        sm: {
            width: "769.99px",
            fields: "10px",
            containerWidth: "320px",
            offset: '10px'
        },
        xs: {
            width: "575.99px",
            fields: "10px",
            containerWidth: "100%",
            offset: '10px'
        }
    },
});