import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Cita(props) {
    
    const procesoEliminar = id => {
        props.eliminarCitas(id);
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Paciente: </Text>
                <Text style={styles.texto}>{props.item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}>Propietario: </Text>
                <Text style={styles.texto}>{props.item.propietario}</Text>
            </View>
            {props.item.telefono && (
                <View>
                    <Text style={styles.label}>Teléfono de contacto: </Text>
                    <Text style={styles.texto}>{props.item.telefono}</Text>
                </View>
            )}
            {props.item.sintomas && (
                <View>
                    <Text style={styles.label}>Síntomas: </Text>
                    <Text style={styles.texto}>{props.item.sintomas}</Text>
                </View>
            )}
            {props.item.fecha && typeof props.item.fecha === 'object' && (
                <View>
                    <Text style={styles.label}>Fecha: </Text>
                    <Text style={styles.texto}>{props.item.fecha.toLocaleDateString()}</Text>
                </View>
            )}

            {props.item.hora && typeof props.item.hora === 'object' && (
                <View>
                    <Text style={styles.label}>Hora: </Text>
                    <Text style={styles.texto}>{props.item.hora.toLocaleTimeString()}</Text>
                </View>
            )}
            <TouchableOpacity onPress={() => procesoEliminar(props.item.id)} style={styles.btnEliminar}>
                <Text style={styles.textoEliminar}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#6046E2',
        marginBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        color: '#E6E6E6',
    },
    texto: {
        fontSize: 16,
        color: '#A9A9A9',
    },
    btnEliminar: {
        backgroundColor: '#8A6FF8',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    textoEliminar: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
