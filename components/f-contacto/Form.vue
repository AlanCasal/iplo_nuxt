<template>
	<div>
		<div id="form-div">
			<div class="container">
				<div class="wow animated fadeInRight" data-wow-delay=".2s">
					<form>
                        <div class="row">
                            <div class="input-field col s12 m8 offset-m2 l6 offset-l3">
                                <i :class="icon_error === 'nombre' ? 'text-danger' : ''" class="material-icons prefix">person</i>
                                <input v-model="nombre"
									   @input="validar($event)"
									   id="nombre"
									   type="text"
									   name="nombre"
									   class="input-control">
                                <label for="nombre">NOMBRE</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12 m8 offset-m2 l6 offset-l3">
                                <i :class="icon_error === 'mail' || icon_error === 'contacto' ? 'text-danger' : ''"
                                   class="material-icons prefix">email</i>
                                <input v-model="mail"
									   @input="validar($event)"
									   id="mail"
									   type="email"
									   name="mail"
									   class="input-control">
                                <label for="mail">EMAIL</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12 m8 offset-m2 l6 offset-l3">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea v-model="textarea"
									   @input="validar($event)"
									   id="textarea"
									   class="materialize-textarea input-control"
									   name="mensaje"></textarea>
                                <label for="textarea">MENSAJE</label>
                            </div>
                        </div>
					</form>

					<div class="form-submit mt-5 text-center">
						<button class="btn shadow-sm btn-xl" 
						        :class="{'disabled': form_error}"
								id="btn-submit" @click.prevent="submit">
							ENVIAR MENSAJE
							<i class="material-icons right prefix">send</i>
						</button>
						<div id="msgSubmit" class="h3 text-center hidden"></div>
						<div class="clearfix"></div>
					</div>

				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import _ from "lodash";

    export default {
        data: () => ({
			icon_error: '',
			nombre    : '',
			telefono  : '',
			mail      : '',
			textarea  : '',

			form_error: false,
        }),

        methods: {
			validar: _.debounce(function(e) {
				if (this.form_error == true) {
					this.form_error  = false;
					this.input_error = '';
					$('.invalid-feedback').remove();
					$('.input-control').removeClass('invalid')
				}
				
				if (e == null) return;

				const [$input, value] = [$(`#${e.target.id}`), e.target.value];
				let err_msg = '';

				switch(e.target.id) {
					case 'nombre':
						const reg_nombre = /^[a-zA-Z\s]*$/;
						if (value == '') err_msg = 'Por favor ingresá un nombre';
						else if (!reg_nombre.exec(value)) err_msg = 'Por favor solo ingresar letras y espacios';
						break;

					case 'telefono': 
						const reg_tel = /^([0-9])*$/;
						if (value == '') err_msg = 'Por favor ingresá un teléfono';
						// if (value == '' && this.mail == '') err_msg = 1; // err_msg = 'Por favor ingresá un teléfono';
						else if (!reg_tel.exec(value)) err_msg = 'Solo se pueden ingresar números';
						else if (value.split('').length < 8 || value.split('').length > 20) err_msg = 'El número debe contener entre 8 y 20 dígitos';
						break;
						
					case 'mail':
						const reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						if (value != '' && !reg_email.exec(value)) err_msg = 'Por favor ingresá un email válido';
						break;
						/* else if (value == '' && this.telefono == '') err_msg = 1; // err_msg = 'Por favor ingresá un email'; */

					case 'textarea':
						if (value == '') err_msg = 'Por favor ingresá tu consulta';
						break;
				}

				if (err_msg != '') {
					this.form_error = true;

					$input
					.addClass('invalid')
					.after(`<span class="helper-text invalid-feedback" data-error="${err_msg}" data-success=""></span>`);
				}
			}, 100),

			submit() {
				let [input_vacio, err_msg] = ['', ''];

				if (this.nombre == '') {
					input_vacio = 'nombre';
					err_msg     = 'Por favor ingresá un nombre';
				}
				else if (this.telefono == '') {
					input_vacio = 'telefono';
					err_msg     = 'Por favor ingresá un teléfono';
				}
				else if (this.textarea == '') {
					input_vacio = 'textarea';
					err_msg     = 'Por favor ingresá tu consulta';
				}

				if (input_vacio != '') {
					this.form_error = true;

					$(`#${input_vacio}`)
					.focus()
					.addClass('invalid')
					.after(`<span class="helper-text invalid-feedback" data-error="${err_msg}" data-success=""></span>`);
				}

				else {
					this.remove_feedback();
					this.show_success_feedback();
					this.submit_hidden_form();
				}
			},

            remove_feedback() {
            	this.icon_error = '';

                if (this.invalid_form()) {
                    $('.input-control').removeClass('invalid');
                    $('.invalid-feedback').remove();
                }

                else if (this.valid_form()) {
                    $('.input-control').removeClass('valid');
                    $('.valid-feedback').remove();
                }
            },

            show_error_feedback(errors) {
				const firstItem = Object.keys(errors)[0];
                const [firstItemDOM, firstItemMessage] = [$(`#${firstItem}`), errors[firstItem][0]];

				firstItemMessage.includes("al menos")
					? this.icon_error = 'contacto'
					: this.icon_error = firstItem;

                if (firstItem === 'mail') {
                    if (firstItemDOM.val() === '')
                        firstItemDOM.addClass('invalid').css('box-shadow', 'none');

                    else firstItemDOM.addClass('invalid').focus();
                }

                else firstItemDOM.addClass('invalid').focus();

                firstItemDOM.after(`<span class="helper-text invalid-feedback" data-error="${firstItemMessage}" data-success=""></span>`);
            },

            show_success_feedback() {
                $('.input-control')
                    .attr('disabled', true)
                    .addClass('valid');

                $('#btn-submit')
                    .text('Enviando datos...')
                    .css({'background-color': '#3f9ae5', 'color': 'white'})
                    .attr('disabled', true);
            },

            invalid_form() {
                return $('.input-control').hasClass('invalid');
            },

            valid_form() {
                return $('.invalid-feedback').length === 0;
            },

        }
    }
</script>

<style scoped>
	#form-div {
		font-family: 'Open Sans', sans-serif;
	}

	label {
		font-family: 'Voltaire', sans-serif;
	}

    .row {
        margin-bottom: 0;
    }
</style>
