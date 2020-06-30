<template>
	<div>
		<img src="@/assets/img/ripple.svg" alt="loading" style="display: none">

		<div id="form-div">
			<div class="container">
				<div class="wow animated fadeInRight" data-wow-delay=".2s">
					<form>
                        <div class="row">
                            <div class="input-field col s12 m8 offset-m2 l6 offset-l3">
                                <i :class="nombre_err != '' ? 'text-danger' : ''" class="material-icons prefix">person</i>
                                <input v-model="nombre"
									   @input="validar($event)"
									   id="nombre"
									   type="text"
									   name="nombre"
									   class="input-control"
									   :class="nombre_err != '' ? 'invalid' : ''">
								<span v-show="nombre_err != ''" class="helper-text text-danger" v-text="nombre_err"></span>
                                <label :class="nombre_err != '' && nombre != '' 
									? 'text-danger active' 
									: nombre != '' ? 'active' : ''" for="nombre">NOMBRE</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12 m8 offset-m2 l6 offset-l3">
                                <i :class="email_err != '' ? 'text-danger' : ''"
                                   class="material-icons prefix">email</i>
                                <input v-model="email"
									   @input="validar($event)"
									   id="email"
									   type="email"
									   name="email"
									   class="input-control"
									   :class="email_err != '' ? 'invalid' : ''">
								<span v-show="email_err != ''" class="helper-text text-danger" v-text="email_err"></span>
                                <label :class="email_err != '' && email != '' 
									? 'text-danger active' 
									: email != '' ? 'active' : ''" for="email">EMAIL</label>
                            </div>
                        </div>

                        <div class="row">
                            <div class="input-field col s12 m8 offset-m2 l6 offset-l3">
                                <i :class="textarea_err != '' ? 'text-danger' : ''" class="material-icons prefix">mode_edit</i>
                                <textarea v-model="textarea"
									   @input="validar($event)"
									   id="textarea"
									   class="materialize-textarea input-control"
									   :class="textarea_err != '' ? 'invalid' : ''"
									   name="mensaje"></textarea>

								<span v-show="textarea_err != ''" class="helper-text text-danger" v-text="textarea_err"></span>
								
								<span id="span-enviado"
									style="color: var(--color-success); font-weight: bold"
									class="helper-text"
									:class="enviado ? 'fadein' : 'fadeout'">
										¡Tu mensaje fue enviado!
								</span>

                                <label :class="textarea_err != '' && textarea != '' 
									? 'text-danger active' 
									: textarea != '' ? 'active' : ''" for="textarea">MENSAJE</label>
                            </div>
                        </div>
					</form>

					<div class="form-submit text-center">
						<button class="btn"
								:class="sending === true ? 'disabled sending pulse' : form_error ? 'disabled' : ''"
								id="btn-submit"
								@click.prevent="submit">
							ENVIAR MENSAJE
						</button>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import _ from "lodash";
	import qs from 'qs';

    export default {
        data: function() {
			return {
				nombre  : '',
				email   : '',
				textarea: '',
				
				nombre_err  : '',
				email_err   : '',
				textarea_err: '',

				form_error: false,

				sending: false,
				enviado: false
			}
		},
		
		computed: {
			err_check() {
				this.form_error = this.nombre_err != '' || this.email_err != '' || this.textarea_err != '';
			}
		},

        methods: {
			validar: _.debounce(function(e) {
				if (e == null) return;

				const [$input, value, id] = [$(`#${e.target.id}`), e.target.value, e.target.id];
				let err_msg = '';

				switch(id) {
					case 'nombre':
						const reg_nombre = /^[a-zA-Z\s]*$/;
						if (value == '') err_msg = 'Por favor ingresá un nombre';
						else if (!reg_nombre.exec(value)) err_msg = 'Por favor solo ingresar letras y espacios';

						this.nombre_err = true
						break;

					case 'email':
						const reg_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
						if (value == '') err_msg = 'Por favor ingresá un email';
						else if (value != '' && !reg_email.exec(value)) err_msg = 'Por favor ingresá un email válido';
						break;

					case 'textarea':
						if (value == '') err_msg = 'Por favor ingresá tu consulta';
						break;
				}

				
				switch(id) {
					case 'nombre'  : this.nombre_err   = err_msg; break;
					case 'email'   : this.email_err    = err_msg; break;
					case 'textarea': this.textarea_err = err_msg; break;
				}

				this.err_check;
			}, 100),

			submit() {
				let input_vacio = '';

				if (this.nombre == '') {
					input_vacio     = 'nombre';
					this.nombre_err = 'Por favor ingresá un nombre';
				}
				
				else if (this.email == '') {
					input_vacio    = 'email';
					this.email_err = 'Por favor ingresá un email';
				}
				
				else if (this.textarea == '') {
					input_vacio       = 'textarea';
					this.textarea_err = 'Por favor ingresá tu consulta';
				}

				if (input_vacio != '') {
					this.form_error = true;

					$(`#${input_vacio}`).focus()
				}

				else {
					this.disable_form();
					this.send_email();
				}
			},

			send_email() {
				const url  = '/send-email';
				const data = qs.stringify({
					nombre: this.nombre,
					email : this.email,
					msg   : this.textarea
				});

				this.$axios
				.$post(url, data)
				.then(res_data => this.clear_form(1))
				.catch(err => this.clear_form(0));
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

            disable_form() {
				this.sending = true;

				$('.input-control')
					.attr('disabled', true)
					.addClass('valid');

                $('#btn-submit').text('Enviando...')
			},

			clear_form(status) {
				if (status === 1) {
					this.nombre   = '';
					this.email    = '';
					this.textarea = '';	

					this.sending = false;
					this.enviado = true;
					setTimeout(() => this.enviado = false, 3000);
				}

				$('.input-control')
                    .attr('disabled', false)
                    .removeClass('valid');

				$('#btn-submit').text('Enviar mensaje')
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
	
	.sending {
		background-image: url('~assets/img/ripple.svg');
		background-position: right;
		background-size: 40px;
		background-repeat: no-repeat;
	}

	#btn-submit {
		width: 200px;
	}

	#span-enviado.fadein {
		transition: opacity .6s;
		opacity: 1;
		visibility: visible;
	}

	#span-enviado.fadeout {
		opacity: 0;
		visibility: hidden;
		z-index: 2;
		transform: scale(1.2);
		-webkit-transition: transform .9s, opacity .6s, visibility .6s;
		-moz-transition: transform .9s, opacity .6s, visibility .6s;
		-ms-transition: transform .9s, opacity .6s, visibility .6s;
		-o-transition: transform .9s, opacity .6s, visibility .6s;
		transition: transform .9s, opacity .6s, visibility .6s;
	}
</style>
