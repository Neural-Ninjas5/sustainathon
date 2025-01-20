import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const OtherContent = ({ product }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="OverView" />
        <Tab label="Specification" />
        <Tab label="Manufacturer-Details" />
      </Tabs>

      {/* Content for Item One */}
      {value === 0 && (
        <Box p={3}>
          <Typography variant="body1">
            Features of Polycrystalline cells type panel:
          </Typography>
          <Typography variant="body2">
            {product.features}
          </Typography>
        </Box>
      )}

      {/* Content for Item Two */}
      {value === 1 && (
        <Box p={3}>
          <TableContainer component={Paper}>
            <Table aria-label="product details table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    What's in the Box
                  </TableCell>
                  <TableCell>{product.whatsInTheBox}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Dimensions (in cms)
                  </TableCell>
                  <TableCell>{product.dimensions}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Wattage
                  </TableCell>
                  <TableCell>{product.wattage}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Application Area
                  </TableCell>
                  <TableCell>{product.applicationArea}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Panel Type
                  </TableCell>
                  <TableCell>{product.panelType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Number of Cells
                  </TableCell>
                  <TableCell>{product.numberOfCells}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Open Circuit Voltage (Voc)
                  </TableCell>
                  <TableCell>{product.openCircuitVoltageVoc}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Short Circuit Current (Isc)
                  </TableCell>
                  <TableCell>{product.shortCircuitCurrentIsc}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Maximum Power Voltage (Vmp)
                  </TableCell>
                  <TableCell>{product.maximumPowerVoltageVmp}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Maximum Power Current (Imp)
                  </TableCell>
                  <TableCell>{product.maximumPowerCurrentImp}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Warranty
                  </TableCell>
                  <TableCell>{product.warranty}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}

      {/* Content for Item Three */}
      {value === 2 && (
        <Box p={3}>
        <TableContainer component={Paper}>
          <Table aria-label="product details table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                   Model Name
                </TableCell>
                <TableCell>{product.modelName}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Country of Origin
                </TableCell>
                <TableCell>{product.countryOfOrigin}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Marketed By
                </TableCell>
                <TableCell>{product.marketedBy}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Customer Care Details
                </TableCell>
                <TableCell>{product.customerCareDetails}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      )}
    </Box>
  );
}

export default OtherContent;
