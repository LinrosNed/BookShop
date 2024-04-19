import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function GenresAccordion({ genres }) {

  if (!genres) {
    return null
  }
  return (
    <div>
        <Accordion key={genres.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Книги по жанрам</Typography>
          </AccordionSummary>
          {genres.map((elem) => (
          <AccordionDetails>
            <Typography>
              {elem.name}
            </Typography>
          </AccordionDetails>
          ))}
        </Accordion>
    </div>
  );
}

export default GenresAccordion;