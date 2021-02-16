import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
} from 'react-native'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import FormValidateSample from '../samples/FormValidateSample'

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        const cadastroValidationSchema = yup.object().shape({
            nome: yup
                .string()
                .matches(/(\w.+\s).+/, 'Informe 2 nomes')
                .required('Nome é obrigatório'),
            idade: yup
                .number()
                .min(18)
                .required('Idade é obrigatório'),
            sexo: yup
                .string()
                .matches(/\bMasculino|Feminino\b/g, 'Masculino ou Feminino')
                .required('Sexo é obrigatório'),
            limite: yup
                .number()
                .min(1000)
                .required('Limite é obrigatório'),
            estudante: yup
                .string()
                .matches(/\Sim|Nao\b/g, 'Sim ou Nao')
                .required('Estudante é obrigatório'),
        });

        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.container}>
                    <View style={styles.cadastroContainer}>
                        <Text>Tela de Cadastro</Text>

                        <Formik
                            validationSchema={cadastroValidationSchema}
                            initialValues={{
                                nome: '',
                                idade: '',
                                sexo: '',
                                limite: '',
                                estudante: '',
                            }}
                            onSubmit={values => alert(values.nome + "Cadastrado com sucesso!")}>
                            {({ handleSubmit, isValid }) => (
                                <>
                                    <Field
                                        component={FormValidateSample}
                                        name="nome"
                                        placeholder="Nome"
                                    />
                                    <Field
                                        component={FormValidateSample}
                                        name="idade"
                                        placeholder="Idade"
                                        keyboardType="numeric"
                                    />
                                    <Field
                                        component={FormValidateSample}
                                        name="sexo"
                                        placeholder="Sexo"
                                    />
                                    <Field
                                        component={FormValidateSample}
                                        name="limite"
                                        placeholder="Limite"
                                        keyboardType="numeric"
                                    />
                                    <Field
                                        component={FormValidateSample}
                                        name="estudante"
                                        placeholder="Estudante?"
                                    />

                                    <Button
                                        onPress={handleSubmit}
                                        title="Cadastrar"
                                        disabled={!isValid}
                                    />
                                </>
                            )}

                        </Formik>
                    </View>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cadastroContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        elevation: 10,
        backgroundColor: '#e6e6e6'
    },
});

export default Cadastro;