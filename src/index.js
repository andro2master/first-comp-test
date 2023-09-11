import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ButtonSharpPrimarySm from './Modules/Components/Buttons/Sharp/Primary/sm/ButtonSharpPrimarySm'
import Table from './Modules/Components/Table';
import ButtonSharpPrimaryLg from './Modules/Components/Buttons/Sharp/Primary/lg/ButtonSharpPrimaryLg';
import ButtonSharpPrimaryMd from './Modules/Components/Buttons/Sharp/Primary/md/ButtonSharpPrimaryMd';
import ButtonSharpPrimary2xl from './Modules/Components/Buttons/Sharp/Primary/2xl/ButtonSharpPrimary2xl';
import ButtonSharpPrimaryXl from './Modules/Components/Buttons/Sharp/Primary/xl/ButtonSharpPrimaryXl';
import DisabledButtonSharpPrimarySm from './Modules/Components/Buttons/Sharp/Disabled/sm/DisabledButtonSharpPrimarySm';
import DisabledButtonSharpPrimaryMd from './Modules/Components/Buttons/Sharp/Disabled/md/DisabledButtonSharpPrimaryMd';
import DisabledButtonSharpPrimaryLg from './Modules/Components/Buttons/Sharp/Disabled/lg/DisabledButtonSharpPrimaryLg';
import DisabledButtonSharpPrimaryXl from './Modules/Components/Buttons/Sharp/Disabled/xl/DisabledButtonSharpPrimaryXl';
import DisabledButtonSharpPrimary2xl from './Modules/Components/Buttons/Sharp/Disabled/2xl/DisabledButtonSharpPrimary2xl';
import ButtonSharpSecondary2xl from './Modules/Components/Buttons/Sharp/Secondary/2xl/ButtonSharpSecondary2xl';
import ButtonSharpSecondaryLg from './Modules/Components/Buttons/Sharp/Secondary/lg/ButtonSharpSecondaryLg';
import ButtonSharpSecondaryMd from './Modules/Components/Buttons/Sharp/Secondary/md/ButtonSharpSecondaryMd';
import ButtonSharpSecondarySm from './Modules/Components/Buttons/Sharp/Secondary/sm/ButtonSharpSecondarySm';
import ButtonSharpSecondaryXl from './Modules/Components/Buttons/Sharp/Secondary/xl/ButtonSharpSecondaryXl';
import ButtonSharpSecondaryGrey2xl from './Modules/Components/Buttons/Sharp/SecondaryGrey/2xl/ButtonSharpSecondaryGrey2xl';
import ButtonSharpSecondaryGreyLg from './Modules/Components/Buttons/Sharp/SecondaryGrey/lg/ButtonSharpSecondaryGreyLg';
import ButtonSharpSecondaryGreyXl from './Modules/Components/Buttons/Sharp/SecondaryGrey/xl/ButtonSharpSecondaryGreyXl';
import ButtonSharpSecondaryGreySm from './Modules/Components/Buttons/Sharp/SecondaryGrey/sm/ButtonSharpSecondaryGreySm';
import ButtonSharpSecondaryGreyMd from './Modules/Components/Buttons/Sharp/SecondaryGrey/md/ButtonSharpSecondaryGreyMd';
import ButtonSharpTextOnlySm from './Modules/Components/Buttons/Sharp/TextOnly/sm/ButtonSharpTextOnlySm';
import ButtonSharpTextOnlyMd from './Modules/Components/Buttons/Sharp/TextOnly/md/ButtonSharpTextOnlyMd';
import ButtonSharpTextOnlyLg from './Modules/Components/Buttons/Sharp/TextOnly/lg/ButtonSharpTextOnlyLg';
import ButtonSharpTextOnlyXl from './Modules/Components/Buttons/Sharp/TextOnly/xl/ButtonSharpTextOnlyXl';
import ButtonSharpTextOnly2xl from './Modules/Components/Buttons/Sharp/TextOnly/2xl/ButtonSharpTextOnly2xl';
import DisabledButtonSmoothPrimary2xl from './Modules/Components/Buttons/Smooth/Disabled/2xl/DisabledButtonSmoothPrimary2xl';
import DisabledButtonSmoothPrimarySm from './Modules/Components/Buttons/Smooth/Disabled/sm/DisabledButtonSmoothPrimarySm';
import DisabledButtonSmoothPrimaryMd from './Modules/Components/Buttons/Smooth/Disabled/md/DisabledButtonSmoothPrimaryMd';
import DisabledButtonSmoothPrimaryLg from './Modules/Components/Buttons/Smooth/Disabled/lg/DisabledButtonSmoothPrimaryLg';
import DisabledButtonSmoothPrimaryXl from './Modules/Components/Buttons/Smooth/Disabled/xl/DisabledButtonSmoothPrimaryXl';
import ButtonSmoothPrimarySm from './Modules/Components/Buttons/Smooth/Primary/sm/ButtonSmoothPrimarySm';
import ButtonSmoothPrimaryMd from './Modules/Components/Buttons/Smooth/Primary/md/ButtonSmoothPrimaryMd';
import ButtonSmoothPrimaryLg from './Modules/Components/Buttons/Smooth/Primary/lg/ButtonSmoothPrimaryLg';
import ButtonSmoothPrimaryXl from './Modules/Components/Buttons/Smooth/Primary/xl/ButtonSmoothPrimaryXl';
import ButtonSmoothPrimary2xl from './Modules/Components/Buttons/Smooth/Primary/2xl/ButtonSmoothPrimary2xl';
import ButtonSmoothSecondary2xl from './Modules/Components/Buttons/Smooth/Secondary/2xl/ButtonSmoothSecondary2xl';
import ButtonSmoothSecondaryLg from './Modules/Components/Buttons/Smooth/Secondary/lg/ButtonSmoothSecondaryLg';
import ButtonSmoothSecondaryMd from './Modules/Components/Buttons/Smooth/Secondary/md/ButtonSmoothSecondaryMd';
import ButtonSmoothSecondarySm from './Modules/Components/Buttons/Smooth/Secondary/sm/ButtonSmoothSecondarySm';
import ButtonSmoothSecondaryXl from './Modules/Components/Buttons/Smooth/Secondary/xl/ButtonSmoothSecondaryXl';
import ButtonSmoothSecondaryGrey2xl from './Modules/Components/Buttons/Smooth/SecondaryGrey/2xl/ButtonSmoothSecondaryGrey2xl';
import ButtonSmoothSecondaryGreyLg from './Modules/Components/Buttons/Smooth/SecondaryGrey/lg/ButtonSmoothSecondaryGreyLg';
import ButtonSmoothSecondaryGreyMd from './Modules/Components/Buttons/Smooth/SecondaryGrey/md/ButtonSmoothSecondaryGreyMd';
import ButtonSmoothSecondaryGreySm from './Modules/Components/Buttons/Smooth/SecondaryGrey/sm/ButtonSmoothSecondaryGreySm';
import ButtonSmoothSecondaryGreyXl from './Modules/Components/Buttons/Smooth/SecondaryGrey/xl/ButtonSmoothSecondaryGreyXl';
import ButtonSmoothTextOnly2xl from './Modules/Components/Buttons/Smooth/TextOnly/2xl/ButtonSmoothTextOnly2xl';
import ButtonSmoothTextOnlyLg from './Modules/Components/Buttons/Smooth/TextOnly/lg/ButtonSmoothTextOnlyLg';
import ButtonSmoothTextOnlyMd from './Modules/Components/Buttons/Smooth/TextOnly/md/ButtonSmoothTextOnlyMd';
import ButtonSmoothTextOnlySm from './Modules/Components/Buttons/Smooth/TextOnly/sm/ButtonSmoothTextOnlySm';
import ButtonSmoothTextOnlyXl from './Modules/Components/Buttons/Smooth/TextOnly/xl/ButtonSmoothTextOnlyXl';
import Primary from './Modules/Components/Buttons/Primary';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Primary />
    {/* <App /> */}
    <h1>Sharp Primary</h1>
    <ButtonSharpPrimarySm />
    <ButtonSharpPrimaryMd />
    <ButtonSharpPrimaryLg />
    <ButtonSharpPrimaryXl />
    <ButtonSharpPrimary2xl />
    <hr />
    <br />
    <h1>Sharp Secondary</h1>
    <ButtonSharpSecondarySm />
    <ButtonSharpSecondaryMd />
    <ButtonSharpSecondaryLg />
    <ButtonSharpSecondaryXl />
    <ButtonSharpSecondary2xl />
    <hr />
    <br />
    <h1>Sharp Disabled</h1>
    <DisabledButtonSharpPrimarySm />
    <DisabledButtonSharpPrimaryMd />
    <DisabledButtonSharpPrimaryLg />
    <DisabledButtonSharpPrimaryXl />
    <DisabledButtonSharpPrimary2xl />
    <hr />
    <br />
    <h1>Sharp Secondary Grey</h1>
    <ButtonSharpSecondaryGreySm />
    <ButtonSharpSecondaryGreyMd />
    <ButtonSharpSecondaryGreyLg />
    <ButtonSharpSecondaryGreyXl />
    <ButtonSharpSecondaryGrey2xl />
    <hr />
    <br />
    <h1>Sharp Text Only</h1>
    <ButtonSharpTextOnlySm />
    <ButtonSharpTextOnlyMd />
    <ButtonSharpTextOnlyLg />
    <ButtonSharpTextOnlyXl />
    <ButtonSharpTextOnly2xl />
    <hr />
    <br />
    <h1>Smooth Primary</h1>
    <ButtonSmoothPrimarySm />
    <ButtonSmoothPrimaryMd />
    <ButtonSmoothPrimaryLg />
    <ButtonSmoothPrimaryXl />
    <ButtonSmoothPrimary2xl />
    <hr />
    <br />
    <h1>Smooth Secondary</h1>
    <ButtonSmoothSecondarySm />
    <ButtonSmoothSecondaryMd />
    <ButtonSmoothSecondaryLg />
    <ButtonSmoothSecondaryXl />
    <ButtonSmoothSecondary2xl />
    <hr />
    <br />
    <h1>Smooth SecondaryGrey</h1>
    <ButtonSmoothSecondaryGreySm />
    <ButtonSmoothSecondaryGreyMd />
    <ButtonSmoothSecondaryGreyLg />
    <ButtonSmoothSecondaryGreyXl />
    <ButtonSmoothSecondaryGrey2xl />
    <hr />
    <br />
    <h1>Smooth TextOnly</h1>
    <ButtonSmoothTextOnlySm />
    <ButtonSmoothTextOnlyMd />
    <ButtonSmoothTextOnlyLg />
    <ButtonSmoothTextOnlyXl />
    <ButtonSmoothTextOnly2xl />
    <hr />
    <br />
    <h1>Smooth Disabled</h1>
    <DisabledButtonSmoothPrimarySm />
    <DisabledButtonSmoothPrimaryMd />
    <DisabledButtonSmoothPrimaryLg />
    <DisabledButtonSmoothPrimaryXl />
    <DisabledButtonSmoothPrimary2xl />
    <Table />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
