import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, IconButton} from '@mui/material';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const SectionDetail = ({ selectedSection, openPopup, handleClosePopup, handleOpenPopup }) => {
  const handleOpenFullScreen = () => {
    window.open(`/sections/${selectedSection}`, '_blank');
  };

  return (
    <Dialog open={openPopup} onClose={handleClosePopup} maxWidth="md" fullWidth>
      <DialogTitle>
        {selectedSection}
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClosePopup}
          aria-label="close"
          sx={{
            marginLeft: 'auto',
            order: { xs: 2, md: 3 },
            ml: { xs: 1, md: 2 },
            float: 'right'
          }}
        >
          <FullscreenExitIcon />
        </IconButton>
        {/* Additional Full Screen Button */}
        <Button
          variant="outlined"
          onClick={handleOpenFullScreen}
          sx={{ float: 'right', mr: 1 }}
        >
          Open Full Screen
        </Button>
      </DialogTitle>
      <DialogContent>
        {/* Render section content based on selectedSection */}
        {/* For example: {selectedSection === 'Section 1' && <SectionOne />} */}
      </DialogContent>
    </Dialog>
  );
};

export default SectionDetail;
