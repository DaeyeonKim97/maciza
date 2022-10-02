import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


export default function Footer(){
    console.log('나 여깄어')
    return(
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
            <div style={{height:50}}></div>
            <Typography variant="h6" align="center" gutterBottom>
                MetaVerse Academy
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Published by @DaeyeonKim, JunHooPark, KyuHyungChoi, TaeMinKim, HankyulKim
            </Typography>
        </Box>
    )
}
