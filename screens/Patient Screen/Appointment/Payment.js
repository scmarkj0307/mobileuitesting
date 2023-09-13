import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { styles } from '../../../style/styles';
import gcashLogo from '../../../assets/images/gcashlogo.png';
import paymayaLogo from '../../../assets/images/paymayalogo.png';
import Button from '../../../components/Button';

function Payment({ navigation, appointmentDetails, setAppointmentDetails }) {
  const [activeOptions, setActiveOption] = useState({ value: "", isActive: false });
  const [activeEpayment, setActiveEpayment] = useState(false);
  const paymentOption = [
    {
      name: "e-payment",
      options: [
        { value: "e-payment/gcash", name: "GCash", picture: gcashLogo },
        { value: "e-payment/paymaya", name: "Paymaya", picture: paymayaLogo },
      ],
    },
    {
      name: "cash",
      value: "cash",
    },
  ];

  const onChangeHandler = (type, value) => {
    setAppointmentDetails({ ...appointmentDetails, [type]: value });
    setActiveOption({ ...activeOptions, isActive: false });
  };

  return (
    <View style={{ ...styles.containerGray, position: 'relative', ...styles.shadow }}>
      <View style={{ padding: 20, flex: 1, flexDirection: 'column', gap: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#52525b' }}>Payment</Text>

        {/*Payment Type*/}
        <View>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>Payment Type</Text>
          <Pressable
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: '#fff',
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderColor: '#06b6d4',
              borderWidth: appointmentDetails.type ? 1 : 0,
              ...styles.shadow,
              overflow: 'hidden',
            }}
            onPress={() => setActiveOption({ ...activeOptions, value: "type", isActive: !activeOptions.isActive })}
          >
            <View style={{ padding: 14 }}>
              <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>{appointmentDetails.type ? appointmentDetails.type : "Select payment type"}</Text>
            </View>
            {(activeOptions.value === "type" && activeOptions.isActive) && (
              <>
                <Pressable
                  style={{ padding: 15, width: '100%', backgroundColor: '#fafafa', ...styles.shadow }}
                  onPress={() => {
                    onChangeHandler("type", "full-payment")
                    setActiveOption({...activeOptions, value:appointmentDetails.method?"":"method"})
                  }} >
                  <Text style={{ fontSize: 12 }}>Full-Payment</Text>
                </Pressable>
                {
                  Number.parseInt(appointmentDetails.totalAmount) > 1000 && <Pressable
                  style={{ padding: 15, width: '100%', backgroundColor: '#fafafa', ...styles.shadow }}
                  onPress={() => {
                    onChangeHandler("type", "installment")
                    setActiveOption({...activeOptions, value:appointmentDetails.method?"":"months"})
                  }} >
                  <Text style={{ fontSize: 12 }}>Installment</Text>
                </Pressable>
                }
              </>
            )}
          </Pressable>
        </View>

        
        {(activeOptions.value==="months" || appointmentDetails.numberOfMonths > 0) && (
          <View>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>Number of Months to Pay</Text>
          <Pressable
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: '#fff',
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderColor: '#06b6d4',
              borderWidth: appointmentDetails.type ? 1 : 0,
              ...styles.shadow,
              overflow: 'hidden',
            }}
            onPress={() => setActiveOption({ ...activeOptions, value: "months", isActive: !activeOptions.isActive })}
          >
            <View style={{ padding: 14 }}>
              <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>{appointmentDetails.numberOfMonths ? `${appointmentDetails.numberOfMonths} Months` : "Select months to pay"}</Text>
            </View>
            {(activeOptions.value === "months" && activeOptions.isActive) && (
              <>
                <Pressable
                  style={{ padding: 15, width: '100%', backgroundColor: '#fafafa', ...styles.shadow }}
                  onPress={() => {
                    onChangeHandler("numberOfMonths", 3)
                    setActiveOption({...activeOptions, value:appointmentDetails.method?"":"method"})
                  }} >
                  <Text style={{ fontSize: 12 }}>3 Months</Text>
                </Pressable>
                <Pressable
                  style={{ padding: 15, width: '100%', backgroundColor: '#fafafa', ...styles.shadow }}
                  onPress={() => {
                    onChangeHandler("numberOfMonths", 6)
                    setActiveOption({...activeOptions, value:appointmentDetails.method?"":"method"})
                  }} >
                  <Text style={{ fontSize: 12 }}>6 Months</Text>
                </Pressable>
                <Pressable
                  style={{ padding: 15, width: '100%', backgroundColor: '#fafafa', ...styles.shadow }}
                  onPress={() => {
                    onChangeHandler("numberOfMonths", 12)
                    setActiveOption({...activeOptions, value:appointmentDetails.method?"":"method"})
                  }} >
                  <Text style={{ fontSize: 12 }}>12 Months</Text>
                </Pressable>
              </>
            )}
          </Pressable>
        </View>
        )}
        
        {/*Payment Method*/}
        {(activeOptions.value==="method" || appointmentDetails.method) && (
          <View>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>Payment Method</Text>
          <Pressable
            style={{
              width: '100%',
              height: 'auto',
              backgroundColor: '#fff',
              borderRadius: 5,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              borderColor: '#06b6d4',
              borderWidth: appointmentDetails.method? 1 : 0,
              ...styles.shadow,
              overflow: 'hidden',
            }}
            onPress={() => {
              setActiveOption({ ...activeOptions, value: "method", isActive: !activeOptions.isActive })
              setActiveEpayment((prev)=>{return !prev})
            }}
          >
            <View style={{ padding: 14 }}>
              <Text style={{ fontSize: 12, textTransform:'capitalize' }}>{appointmentDetails.method ? appointmentDetails.method : "Select payment method"}</Text>
            </View>
            {(activeOptions.value === "method" && activeOptions.isActive) && paymentOption.map((val, idx) => (
              <React.Fragment key={idx}>
                {val.options ? (
                  <View style={{ width: '100%', height: 'auto' }}>
                    <Pressable
                      style={{ padding: 15, width: '100%', backgroundColor: '#fafafa', ...styles.shadow }}
                      onPress={() => setActiveEpayment(!activeEpayment)}
                    >
                      <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>{val.name}</Text>
                    </Pressable>
                    {activeEpayment && val.options.map((option, optionIdx) => (
                      <Pressable
                        key={optionIdx}
                        style={{ padding: 15, width: '100%', backgroundColor: '#e4e4e7',display:'flex', flexDirection:'row', alignItems:'center', columnGap:10, ...styles.shadow }}
                        onPress={()=>onChangeHandler("method", option.value)}
                      >
                        <Image source={option.picture} style={{ width: 40, height: 40, borderRadius:10 }} />
                        <Text style={{ fontSize: 12, fontWeight:'bold', textTransform: 'capitalize' }}>{option.name}</Text>
                      </Pressable>
                    ))}
                  </View>
                ) : (
                  <Pressable
                    key={idx}
                    style={{ padding: 15, width: '100%', backgroundColor: '#fafafa', ...styles.shadow }}
                    onPress={() => onChangeHandler("method", "cash")}
                  >
                    <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>{val.name}</Text>
                  </Pressable>
                )}
              </React.Fragment>
            ))}
          </Pressable>
        </View>
        )}
        
      </View>
      <View style={{ position: 'absolute', width: '100%', padding: 20, bottom: 0, backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', rowGap:20}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
          <Text style={{ fontWeight: 'bold' }}>Total Amount</Text>
          <Text>₱ {appointmentDetails.totalAmount.toLocaleString()}</Text>
        </View>

        {appointmentDetails.method && (<Button 
          title="Continue"
          bgColor="#06b6d4"
          textColor="#fff"
          onPress={()=>{navigation.navigate("Review")}} />
          )}
      </View>
    </View>
  );
}

export default React.memo(Payment);
