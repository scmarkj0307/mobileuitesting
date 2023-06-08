import axios from 'axios';
import React,{useEffect, useState, useRef} from 'react';
import { View, Text, Pressable } from 'react-native';
import Loader from '../../../components/Loader';
import moment from 'moment';
import DatePicker from 'react-native-modern-datepicker';
import { styles } from '../../../style/styles';
import { useSelector } from 'react-redux';

const Schedule = ({ navigation, appointmentDetails, setAppointmentDetails }) => {
  const { appointment } = useSelector((state) => state.appointment);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(moment().format('L'));
  const dateRef = useRef("");

  console.log(appointmentDetails);

  return (
    <DatePicker
      mode='calendar'
    />
  );
};

export default React.memo(Schedule);
