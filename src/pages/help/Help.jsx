import React from 'react';
import Header from "../../components/header/Header";
import {Container, Divider} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from "react-router-dom";

function Help() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Header/>
            <Container>
                <Typography sx={{color: 'text.primary', marginBottom: '5px'}} variant={'h4'}>Часто задаваемые вопросы</Typography>
                <Divider sx={{marginBottom: '5px'}} />
                <Typography sx={{color: 'text.primary', marginBottom: '25px'}} variant={'subtitle1'}>Здесь вы можете найти ответы на наиболее часто задаваемые вопросы:</Typography>

                <Typography sx={{color: 'text.primary', marginBottom: '15px'}} variant={'h5'}>Вопросы, связанные с объявлениями</Typography>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{color: 'text.secondary'}}>Я потерял своего питомца, что мне делать?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Если вы потеряли своего питомца, прежде всего, постарайтесь не паниковать. Многие питомцы находятся сами по себе в течение нескольких часов. Некоторым животным требуется немного больше помощи, чтобы найти дорогу домой, и здесь мы можем помочь.<br/>
                            После того как вы создадите аккаунт, вам нужно рассказать нам о своем питомце. У нас есть структурированный процесс подачи заявления о пропаже животного, чтобы мы могли получить от вас всю необходимую информацию. Начните, перейдя по ссылке: <Link to={'/report'}>создать объявление</Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{color: 'text.secondary'}}>
                            Как сообщить вам, что мой питомец вернулся домой?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Если вы воссоединились со своим питомцем или вам нужно закрыть отчет по какой-либо другой причине, вы можете сделать это в разделе Профиль > Мои объявления.
                            Там перечислены все имеющиеся у вас объявления. <br/>
                            Найдите объявление, который вы хотите закрыть, и нажмите на кнопку со значком креста, после чего нужно будет подтвердить удаление во всплывающем окне.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{color: 'text.secondary'}}>
                            Я нашел бездомное животное. Мне сообщить о нем как о потерянном или найденном животном?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Если вы нашли бездомное животное, пожалуйста, зарегистрируйте его как найденное животное.
                            Вполне вероятно, что его хозяин ищет его, поэтому важно как можно скорее сообщить о нем в Интернете. <Link to={'/report'}>Создать объявление</Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{color: 'text.secondary'}}>Я допустил ошибку при создании отчета. Как мне его изменить?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Если вам необходимо отредактировать уже созданное объявления, вы можете сделать это в разделе Профиль > Мои объявления.
                            Там перечислены все имеющиеся у вас объявления. <br/>
                            Найдите объявление, который вы хотите отредактировать, и нажмите на кнопку со значком карандаша, после чего у вас появится возможность редактировать введенные данные.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel5bh-content"
                        id="panel5bh-header"
                    >
                        <Typography sx={{color: 'text.secondary'}}>Как долго вы будете размещать информацию о моем пропавшем животном?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Ваше животное будет оставаться в списке на нашем сайте до тех пор, пока вы не удалите его.
                            Время от времени мы будем отправлять напоминание по электронной почте, чтобы узнать, нет ли новостей.
                            <br/>
                            В некоторых случаях пропавшее животное воссоединяется после нескольких лет отсутствия, поэтому важно,
                            чтобы вы закрывали объявление только в том случае, если животное было найдено или произошло какое-то другое событие, которое означает, что в объявлении больше нет необходимости.
                         </Typography>
                    </AccordionDetails>
                </Accordion>
            </Container>
        </div>
    );
}

export default Help;