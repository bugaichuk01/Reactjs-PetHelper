import React from 'react';
import {Box} from "@mui/material";
import {
    EmailIcon,
    EmailShareButton,
    MailruIcon,
    MailruShareButton,
    OKIcon,
    OKShareButton, RedditIcon, RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    VKIcon,
    VKShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";
import {useLocation} from "react-use";
import checkStatus from "../../../_utils/checkStatus";

function Share({currentPost}) {
    const sampleLocation = useLocation();

    return (
        <Box sx={{justifyContent: 'space-between', display: 'flex', marginBottom: '10px'}}>

            <Box sx={{alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                <VKShareButton
                    url={sampleLocation.href}
                    title = {checkStatus(currentPost?.status, 'Вы не видели этого питомца?', 'Найден питомец!')}
                    image={currentPost?._links?.photoLink?.href}
                >
                    <VKIcon size={32} round={true}/>
                </VKShareButton>
            </Box>

            <TelegramShareButton
                url={sampleLocation.href}
                title = {checkStatus(currentPost?.status, 'Вы не видели этого питомца?', 'Найден питомец!')}
            >
                <TelegramIcon size={32} round={true}/>
            </TelegramShareButton>

            <WhatsappShareButton
                url={sampleLocation.href}
                title = {checkStatus(currentPost?.status, 'Вы не видели этого питомца?', 'Найден питомец!')}
            >
                <WhatsappIcon size={32} round={true}/>
            </WhatsappShareButton>

            <OKShareButton
                url={sampleLocation.href}
                title = {checkStatus(currentPost?.status, 'Вы не видели этого питомца?', 'Найден питомец!')}
            >
                <OKIcon size={32} round={true}/>
            </OKShareButton>

            <MailruShareButton
                url={sampleLocation.href}
                title = {checkStatus(currentPost?.status, 'Вы не видели этого питомца?', 'Найден питомец!')}
                image={currentPost?._links?.photoLink?.href}
            >
                <MailruIcon size={32} round={true}/>
            </MailruShareButton>

            <EmailShareButton
                url={sampleLocation.href}
                title = {checkStatus(currentPost?.status, 'Вы не видели этого питомца?', 'Найден питомец!')}
            >
                <EmailIcon size={32} round={true}/>
            </EmailShareButton>

            <RedditShareButton
                url={sampleLocation.href}
                title = {checkStatus(currentPost?.status, 'Вы не видели этого питомца?', 'Найден питомец!')}
            >
                <RedditIcon size={32} round={true}/>
            </RedditShareButton>
        </Box>
    );
}

export default Share;