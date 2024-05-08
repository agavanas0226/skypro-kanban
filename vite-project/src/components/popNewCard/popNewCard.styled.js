import styled from "styled-components";
import { DayPicker } from 'react-day-picker';


export const DayPickerCalendar = styled (DayPicker) `
    width: 168px;
    height: 228px;
    gap: 14px;
` 

export const CalendarBlocked = styled.div`
    width: 168 px;
    height: 228 px;
`

export const CalendarBlock = styled.div`
    width: 168px;
    height: 228px;
    gap: 14px;
`
export const PopNewCardBlock = styled.div`
display: block;
margin: 0 auto;
background-color: #FFFFFF;
max-width: 700px;
width: 100%;
height: 596px;
padding: 40px 30px 48px;
border-radius: 10px;
border: 0.7px solid #D4DBE5;
position: relative;
`
export const Label1 = styled.label`
width: 115px;
height: 30px;
/* radius:24px; */
padding:8px, 20px, 8px, 20px;
background-color: #FFE4C2;
color: #FF6D00;
font: Roboto;
font-size: 14px;
line-height: 14.21px;
/* align-items: center */
`
export const Label2 = styled.label`
width: 98px;
height: 30px;
/* radius:24px; */
padding:8px, 20px, 8px, 20px;
background-color: #B4FDD1;
color: #06B16E;
font: Roboto;
font-size: 14px;
line-height: 14.21px;
`
export const Label3 = styled.label`
width: 114px;
height: 30px;
/* radius:24px; */
padding:8px, 20px, 8px, 20px;
background-color: #E9D4FF;
color: #9A48F1;
font: Roboto;
font-size: 14px;
line-height: 14.21px;
`
export const FormNewInput = styled.input`
width: 300px;
`
export const FormNewArea = styled.textarea`
width: 300px;
`
export const FormNewBlockInput = styled.div`
width: 300px;
`
export const FormNewBlockArea = styled.div`
width: 300px;
`
export const PopNewCardForm = styled.form`
width: 300px;
`
export const PopNewCardWrap = styled.div`
width: 300px;
`