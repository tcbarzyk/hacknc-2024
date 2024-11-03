import React from 'react';
import { Page, View, Text, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  header: {
    fontSize: 40,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  section: {
    fontSize: 15,
    marginVertical: 10,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textContent: {
    fontSize: 14,
    marginVertical: 5,
    lineHeight: 1.5,
    color: '#555',
  },
});

const EmergencyPlanPdf = ({ plan }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>Emergency Plan</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Meeting Locations</Text>
        <Text style={styles.textContent}>{plan.location}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Emergency Contact</Text>
        <Text style={styles.textContent}>{plan.contact}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Evacuation Plan</Text>
        <Text style={styles.textContent}>{plan.evac}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Shelter-in-place Plan</Text>
        <Text style={styles.textContent}>{plan.shelter}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Medical Emergency Plan</Text>
        <Text style={styles.textContent}>{plan.medical}</Text>
      </View>
    </Page>
  </Document>
);

export default EmergencyPlanPdf