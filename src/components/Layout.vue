<template>
  <v-app id="inspire">
 <v-layout class="rounded rounded-md">

    <v-app-bar  title="Registro Proveedor"></v-app-bar>

    <v-main class="d-flex justify-center mt-5" style="min-height: 300px;height:auto">
<v-sheet width="70vw" class="mx-auto">
    <v-form ref="form">
        <v-container>
      <v-row>
       
         <v-col
          cols="12"
          md="4"
        >
 <v-combobox
        clearable
        label="Tipo Proveedor"
      v-model="formProveedor.type_person"
        :rules="type_personRules"
        :items="['Fisica', 'Moral']"
        @update:modelValue="handleTypePerson($event)"
        ></v-combobox>
       </v-col>

       <v-col
          cols="12"
          md="4"
        >
  <v-text-field
        v-model="formProveedor.rfc"
        label="RFC"
        :rules="[rfcRules]"
        :onkeyup="mayus(this)"
        counter
        :maxlength="rfcMaxlength"
        clearable
        :disabled="disRfc"
      ></v-text-field>
       </v-col>
        <v-col
          cols="12"
          md="4"
        >
      <v-text-field
        v-model="formProveedor.business_name"
        label="Razón Social"
        :rules="business_nameRules"
        clearable
      ></v-text-field>
       </v-col>
      </v-row>
    </v-container>
         <v-container>
      <v-row>
       <v-col
          cols="12"
          md="4"
        >
      <v-text-field
        v-model="formProveedor.comercial_name"
        label="Nombre Comercial"
        :rules="comercial_nameRules"
        clearable
      ></v-text-field>
       </v-col>
        <v-col
          cols="12"
          md="4"
        >
      <v-text-field
        v-model="formProveedor.phone"
        label="Telefono"
        :rules="phoneRules"
        clearable
        onkeypress='return event.charCode >= 48 && event.charCode <= 57'
      ></v-text-field>
    </v-col>
        <v-col
          cols="12"
          md="4"
        >
    <v-text-field
        v-model="formProveedor.email"
        label="Correo"
        :rules="emailRules"
        clearable
      ></v-text-field> 
              </v-col>
       
      </v-row>
    </v-container>
         <v-container>
      <v-row>
       <v-col
          cols="12"
          md="4"
        >
      <v-text-field
        v-model="formProveedor.contact"
        label="Contacto de Vendedor"
        :rules="contactRules"
        clearable
      ></v-text-field> 
             </v-col>
        <v-col
          cols="12"
          md="4"
        >
      <v-text-field
        v-model="formProveedor.address"
        label="Calle Numero"
        :rules="addressRules"
        clearable
      />
        </v-col>

       <v-col
          cols="12"
          md="4"
        >
      <v-text-field
        v-model="formProveedor.suburb"
        label="Colonia"
        :rules="suburbRules"
        clearable
      />
        </v-col>

       
      </v-row>
    </v-container>
       <v-container>
      <v-row>
      <v-col
          cols="12"
          md="4"
        >
        <v-text-field
        v-model="formProveedor.city"
        label="Alcaldia/Municipio"
        :rules="cityRules"
        clearable
      ></v-text-field>
           
        </v-col>
        <v-col
           cols="12"
          md="3"
        >
      <v-select
        clearable
        label="Pais"
         :rules="countryRules"
         v-model="formProveedor.country"
        item-title="name"
        item-value="id"
        :return-object="false"
        :items="Countries"
        autocomplete="off"
        @update:modelValue="ChangeCountry"
        />
        </v-col>
          <v-col
             cols="12"
          md="3"
        >
      <v-select
        clearable
         :rules="stateRules"
          v-model="formProveedor.state"
           item-title="name"
        item-value="id"
        label="Estado"
        :return-object="false"
        :items="States"
        :disabled="disState"
        />
      </v-col>
          <v-col
         cols="12"
          md="2"
        >
           <v-text-field
                v-model="formProveedor.cp"
                label="CP"
                :rules="cpRules"
                clearable
                onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                maxlength="5"
            />
             </v-col>
 
      </v-row>
    </v-container>
       <v-container>
            <v-row>
             <v-col md="4">
         <v-text-field
        v-model="formProveedor.web_page"
        label="Pagina Web"
        clearable
      />
         </v-col>
                <v-col md="4">
           <v-select
        v-model="formProveedor.bank"
        label="Banco"
        :rules="bankRules"
        item-title="name"
        item-value="id"
        :return-object="false"
        :items="Banks"
        clearable
      />
       </v-col>

        <v-col cols="12" md="4">
         <v-text-field
        v-model="formProveedor.bank_account"
        label="Numero de cuenta"
        :rules="bank_accountRules"
        maxlength="13"
        counter
        onkeypress='return event.charCode >= 48 && event.charCode <= 57'
        clearable
      ></v-text-field>
       </v-col>

      
      </v-row>
    </v-container>
    <v-container>
            <v-row>
          <v-col
          cols="12"
          md="4"
        >
         <v-text-field
        v-model="formProveedor.bank_clabe"
        label="Clabe Bancaria"
        :rules="bank_clabeRules"
        maxlength="18"
        counter
        onkeypress='return event.charCode >= 48 && event.charCode <= 57'
        clearable
      ></v-text-field>
       </v-col>
        <v-col cols="12" md="4">
         <v-text-field
        v-model="formProveedor.bank_swift"
        label="Swift Proveedor"
        clearable
      />
          </v-col>
       <!-- <v-col cols="12" md="2">
         <v-text-field
        v-model="formProveedor.credit_days"
        label="Dias de Crédito"
        readonly
      />
          </v-col>-->
        <v-col  cols="12" md="4">
         <v-combobox
          v-model="formProveedor.currency"
          :rules="currencyRules"
        clearable
        label="Moneda"
        :items="['MXN', 'USD', 'EUR']"
        ></v-combobox>
          </v-col>
            </v-row>
    </v-container>
    <v-container>
            <v-row>
        <v-col cols="12" md="5">
      <v-combobox
       clearable
        :rules="classificationRules"
       v-model="formProveedor.classification_main"
         item-title="description"
        item-value="description"
        :return-object="false"
        label="Especialidad Principal"
        :items="Specialities"
        ></v-combobox>
          </v-col>
            <v-col cols="12" md="7">
      <v-combobox
       clearable
        chips
        multiple
        @keydown="onComboboxKeydown"
        :editable="false"
          color="deep-purple-accent-4"
          v-model="formProveedor.classification_aditional"
         item-title="description"
        item-value="id"
        :return-object="false"
        label="Especialidad Adicional"
        :items="Specialities"
        ></v-combobox>
          </v-col>
      </v-row>
    </v-container>
  <v-container>
   <v-row>
      <v-col cols="12" md="12">
    <v-card >
          <template v-slot:title>
          <v-row class="justify-center mt-2 mb-1">
   
          <span>   Adjuntar Documentación </span>
          <v-dialog width="500">
  <template v-slot:activator="{ props }">
  <v-btn v-bind="props" icon="mdi-information-outline" size="small" variant="plain"></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Información Lista de Documentos Requeridos">
      <v-card-text>
        <li>Identificación oficial</li>
        <li>Constancia de situación fiscal</li>
        <li>Opinión de cumplimiento de obligaciones fiscales</li>
        <li>Comprobante de domicilio vigente</li>
        <li>Carátula de estado de cuenta</li>
        <li>Acta constitutiva</li>
        <li>Alta ante el IMSS</li>
        <li>Opinión de cumplimiento de obligaciones ante el IMSS</li>
        <li>Carta para emitir transferencias bancarias</li>
        <li>Documento REPSE ( STPS )</li>
        <li>Declaración Anual y/o est. Resultados</li>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Cerrar"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
        
         </v-row>

      </template>

        <template v-slot:text>
         <v-row class="justify-center mt-3">
  <v-file-input
    v-model="files"
    ref="files"
    color="deep-purple-accent-4"
    counter
    label="Adjuntar archivos"
    multiple
    clearable
    placeholder="selecciona tus archivos"
    prepend-icon="mdi-paperclip"
    variant="outlined"
    :show-size="1000">
      <template v-slot:selection="{ fileNames }">
        <template v-for="(fileName, index) in fileNames" :key="fileName">
          <v-chip
            color="deep-purple-accent-4"
            label
            size="small"
            class="me-2">
            {{ fileName }}
          </v-chip>

        <!--<span
          v-else-if="index === 2"
          class="text-overline text-grey-darken-3 mx-2"
        >
          +{{ files.length - 2 }} Archivo(s)
        </span>-->
      </template>
    </template>
  </v-file-input>
   
   </v-row>
   <v-row class="justify-center mt-3">
   <ul>
      <li v-for="(file, index) in this.uploads" :key="index">
          <v-chip
           color="primary"
            label
            size="small"
            class="me-2">
            <v-icon start icon="mdi-file"></v-icon>
            <a :href="file.file_url" target="_blank">{{ file.name }}</a> 
          </v-chip>
          
        <v-btn prepend-icon="mdi-delete" size="x-small" @click="removeFile(file)">Eliminar</v-btn>
      </li>
    </ul>
   </v-row>
      </template>
        <!--<v-row>
      <v-col cols="12" md="4">
          <v-card subtitle="• Identificación oficial">
            <v-file-input class="ml-5 w-75"
            v-model="file_INE"
                show-size
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Comprobante de domicilio vigente">
            <v-file-input
            v-model="file_ComprobanteDomicilio"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Constancia de situación fiscal">
                    <v-file-input
                      v-model="file_CSF"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
      </v-row>
       <v-row>
      <v-col cols="12" md="4">
          <v-card subtitle="•Opinión de cumplimiento de obligaciones fiscales">
            <v-file-input class="ml-5"
              v-model="file_OCOF"
                show-size
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Carátula de estado de cuenta">
                    <v-file-input
                      v-model="file_EstCuenta"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Curriculum de la empresa">
                    <v-file-input
                    v-model="file_CV"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
      </v-row>
       <v-row>
      <v-col cols="12" md="4">
          <v-card subtitle="• Acta constitutiva">
            <v-file-input class="ml-5"
              v-model="file_ActaConstitutiva"
                show-size
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Alta ante el IMSS">
                    <v-file-input
                    v-model="file_AltaIMSS"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Opinión de cumplimiento de obligaciones ante el IMSS">
                    <v-file-input
                 v-model="file_OCOIMSS"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
      </v-row>
       <v-row>
      <v-col cols="12" md="4">
          <v-card subtitle="• Carta para emitir transferencias bancarias">
            <v-file-input class="ml-5"
               v-model="file_CTB"
                show-size
                accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Documento REPSE ( STPS )">
                    <v-file-input
                       v-model="file_REPSE"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
                <v-col cols="12" md="4">
          <v-card subtitle="• Declaración Anual y/o est. Resultados">
                    <v-file-input
                     v-model="file_DAER"
                show-size
                class="ml-5"
                 accept="image/png,application/pdf"
                label="haz clic para cargar"
                prepend-icon="mdi-file-document"
            ></v-file-input>
             </v-card>
                </v-col>
      </v-row>-->
    </v-card>
     </v-col>
      </v-row>
    </v-container>
  <v-container>
            <v-row class="justify-center">
               <v-col cols="12" md="4">
      <v-btn  type="button" append-icon="mdi-eraser" block color="gray" class="mt-2" variant="outlined" @click="resetForm()">
        Limpiar Campos  
      <template v-slot:append>
        <v-icon color="gray"></v-icon>
      </template></v-btn>
      
  
            </v-col>
      </v-row>
                 <v-row class="justify-center">
               <v-col cols="12" md="4">
         <Captcha ref="reCaptcha" />
      
  
            </v-col>
      </v-row>
      <v-row class="justify-center">
                <v-col cols="12" md="4">
      <v-btn :loading="btnloading" type="button" append-icon="mdi-content-save-edit-outline" block color="blue" class="mt-2" variant="outlined" @click="confirmProveedor(4)">Guardar en Borrador</v-btn>
            </v-col>

       <v-col cols="12" md="4">

      <v-btn :loading="btnloading" type="button" block class="mt-2" color="green" variant="elevated" append-icon="mdi-check-circle"  @click="confirmProveedor(0)">
        Registrar</v-btn>
            </v-col>
      </v-row>
    </v-container>
    </v-form>
  </v-sheet>
    </v-main>

  </v-layout>

  </v-app>
 
</template>

<script>
import  Api from '@/store/modules/Api' // Clase Api donde se declara Axios y la ruta al servidor
import { mapGetters} from 'vuex'
import { notify } from "@kyvg/vue3-notification";
import Captcha from './Captcha';

  export default {
    components:{
      Captcha
    },
    data: () => ({
       rfcMaxlength:13,
        disRfc:true,
        disState:true,
        btnloading:false,
        disModal:false,
      formProveedor:{
        id: '',
        business_name: '',
       comercial_name: '',
        type_person:'',
        rfc:'',
        email:'',
        phone:'',
        contact:'',
        bank:'',
        bank_account:'',
        bank_clabe:'',
        bank_swift:'',
        address:'',
        suburb:'',
        city:'',
        state:'',
        cp:'',
        country:'',
        web_page:'',
        credit_days: 30,
        currency:'',
        classification_main:'',
        classification_aditional:[]
      },
        files:[],
        uploads:[],
        file_INE:[],
        file_ComprobanteDomicilio:[],
        file_CSF:[],
        file_OCOF:[],
        file_EstCuenta:[],
        file_CV:[],
        file_ActaConstitutiva:[],
        file_AltaIMSS:[],
        file_OCOIMSS:[],
        file_CTB:[],
        file_REPSE:[],
        file_DAER:[],
    
       business_nameRules: [
        value => {
          if (value?.length > 0) return true

          return 'Ingresa Razón Social'
        },
      ],
      type_personRules: [
        value => {
          if (value?.length > 0) return true

          return 'Ingresa tipo'
        },
      ],
      comercial_nameRules: [
        value => {
          if (value?.length > 0) return true

          return 'Ingresa Nombre Comercial'
        },
      ],
       emailRules: [
        value => {
         if (/^[^@]+@\w+(\.\w+)+\w$/.test(value)) return true

          return 'Ingresa correo'
        },
      ],
     contactRules: [
        value => {
          if (value?.length > 0) return true

          return 'Ingresa contacto'
        },
      ],
      phoneRules: [
        value => {
          if (/^[0-9]+$/.test(value)) return true

          return 'Ingresa telefono contacto'
        },
      ],
       addressRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa calle,numero'
        },
      ],
     cpRules: [
        value => {
          if (value?.length == 5) return true

          return 'Ingresa codigo postal'
        },
      ],
       suburbRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa colonia'
        },
      ],
         cityRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa ciudad'
        },
      ],
      countryRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa País'
        },
      ],
       stateRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa Estado'
        },
      ],
         bankRules: [
        value => {
          if (value?.length > 0) return true

          return 'Ingresa nombre Banco'
        },
      ],
         bank_accountRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa cuenta bancaria'
        },
      ],
        bank_clabeRules: [
        value => {
           if (value?.length == 18) return true

          return 'Ingresa Clabe 18 digitos'
        },
      ],
      currencyRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa tipo de moneda'
        },
      ],
      classificationRules: [
        value => {
           if (value?.length > 0) return true

          return 'Ingresa especialidad principal'
        },
      ],
    }),
     created() {
    this.$store.dispatch("getContries")
    this.$store.dispatch("getBanks")
    this.$store.dispatch("getSpecialities")
  },
      computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters([
    'Countries',
    'States',
    'Banks',
    'Specialities'
    ])
  },
    methods: {
    mayus(e) {
        if(this.formProveedor.rfc?.length>0){
          this.formProveedor.rfc = this.formProveedor.rfc.toUpperCase();
        }else{
             this.formProveedor.rfc ="";
        }
    },
     handleTypePerson(){
      if(this.formProveedor.type_person=="Fisica"){
        this.rfcMaxlength=13;
       this.disRfc=false;
      }else if(this.formProveedor.type_person=="Moral"){
        this.rfcMaxlength=12;
       this.disRfc=false;
      }else{
      this.disRfc=true;

      }
    },
    async rfcRules(value){
      let patron="";
       let rfcp="";
       if(value.trim() != ''){
      if (this.formProveedor.type_person == 'Fisica' ) {
        this.rfcMaxlength=13
       patron= /^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((?!(?:0{3})$).*[A-Za-z0-9]{3})$/;
      } else {
         this.rfcMaxlength=12
          patron= /^(([A-Z]|[a-z]){3})([0-9]{6})(((?!(?:0{3})$).*)[A-Za-z0-9]{3})$/;
      }
      rfcp = patron.test(value);
      if(value=='XEXX010101000' || value=='XAXX010101000'){
        return true;
      }

       
        if(rfcp === true){
         const formData = new FormData()
    const config = { headers: { 'content-type': 'multipart/form-data' }}

          formData.append('rfc', value)
      const msg= await Api.post('/suppliers/ExistRFC',formData,config).then(res => {
       const { data } = res
       console.log("dfvb")
       if(data.local != null){
        if(data.local.status=="4" && this.disModal==false){
             this.$swal({
            title: 'Registro Proveedor en Borrador',
            text: "Deseas Continuar el proceso donde lo dejaste o comenzar nuevamente?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Continuar',
            cancelButtonText: 'Empezar de Nuevo',
            reverseButtons: true,
            showCloseButton: true,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          }).then((result) => {
          
            if (result.isConfirmed) {
              this.formProveedor.id=data.local.id;
              this.formProveedor.business_name=data.local.business_name;
                this.formProveedor.comercial_name= data.local.comercial_name;
              this.formProveedor.type_person=data.local.type_person;
              this.formProveedor.rfc=data.local.rfc;
              this.formProveedor.email=data.local.email;
              this.formProveedor.phone=data.local.phone;
              this.formProveedor.contact=data.local.contact;
              this.formProveedor.bank=data.local.bank;
              this.formProveedor.bank_account=data.local.bank_account;
              this.formProveedor.bank_clabe=data.local.bank_clabe;
              this.formProveedor.bank_swift=data.local.bank_swift;
              this.formProveedor.address=data.local.address;
              this.formProveedor.suburb=data.local.suburb;
              this.formProveedor.city=data.local.city;
              this.formProveedor.state=data.local.state;
              this.formProveedor.cp=data.local.cp;
              this.formProveedor.country=data.local.country;
              this.ChangeCountry();
              this.formProveedor.web_page=data.local.web_page;
              this.formProveedor.currency=data.local.currency;
              this.formProveedor.classification_main=data.local.speciality_main;
              this.formProveedor.state=data.local.state;
              let arrSpec = [];
              let arrfiles = [];
               for(let i=0;i<data.local.specialities.length;i++){
               arrSpec.push(data.local.specialities[i].cat_supplier_specialty);
               }
               for(let i=0;i<data.local.get_document_supplier_all.length;i++){
                arrfiles.push(data.local.get_document_supplier_all[i]);
               }
                this.formProveedor.classification_aditional=arrSpec;
                this.uploads=data.local.get_document_supplier_all
          
            }else if (result.dismiss=="cancel"){
              this.deleteSupplier(data.local.id);   
            }else if (result.dismiss=="close"){
              this.resetForm();
            }
          })
        }else if(data.local.status=="0"){
               this.$swal({
              position: 'center',
              icon: 'warning',
              title: 'Proveedor registrado en proceso de autorización',
              showConfirmButton: true,
              // timer: 2500
            })
            this.resetForm();
        }else  if(data.local.status=="1"){
               this.$swal({
              position: 'center',
              icon: 'success',
              title: 'Proveedor ya se encuentra autorizado',
              showConfirmButton: true,
              // timer: 2500
            })
            this.resetForm();
        }

        // }
      //  return callback(new Error("ingresa"))
       }else if(data.intelisis[0].Proveedor !== 'NO EXISTE EL PR'){
        //  if(this.dialogType=='edit'){
        //    return callback()
        // }else{
         return "RFC ya existe en Intelisis!"

        // }
        //   return callback(new Error("ingresa"))
       }else{
      //  return true
       }
        return data

      }).catch(error => {
        console.log(error)
      })
      // return msg;
        }else{
            return 'RFC Invalido';
        }
        }else{
        return 'Ingresa RFC'
      }
    },

    ChangeCountry(){
      if(this.formProveedor.country != ""){
        const formData = new FormData()
      formData.append('country_id', this.formProveedor.country)
      this.$store.dispatch("getStatesbyCountry",formData);
      this.disState=false;
      this.formProveedor.state="";
      }else{
         this.formProveedor.state="";
        this.disState=true;
      }
    },
      resetForm() {
        this.file_INE=[]
        this.file_ComprobanteDomicilio=[]
        this.file_CSF=[]
        this.file_OCOF=[]
        this.file_EstCuenta=[]
        this.file_CV=[]
        this.file_ActaConstitutiva=[]
        this.file_AltaIMSS=[]
        this.file_OCOIMSS=[]
        this.file_CTB=[]
        this.file_REPSE=[]
        this.file_DAER=[]
        this.formProveedor.id='';
        this.formProveedor.business_name= '';
        this.formProveedor.comercial_name= '';
        this.formProveedor.type_person='';
        this.formProveedor.rfc='';
        this.formProveedor.email='';
        this.formProveedor.phone='';
        this.formProveedor.contact='';
        this.formProveedor.bank='';
        this.formProveedor.bank_account='';
        this.formProveedor.bank_clabe='';
        this.formProveedor.bank_swift='';
        this.formProveedor.address='';
        this.formProveedor.suburb='';
        this.formProveedor.city='';
        this.formProveedor.state='';
        this.formProveedor.cp='';
        this.formProveedor.country='';
        this.formProveedor.web_page='';
        this.formProveedor.classification_aditional=[];
        this.formProveedor.classification_main=[];
        this.formProveedor.currency='';
        this.files=[];
        this.uploads=[];
        this.disModal=false
      },
          async confirmProveedor(st) {
      this.btnloading= true

        // console.log(this.$refs.reCaptcha.valid)
        //  if(this.$refs.reCaptcha.valid){
        //            this.$swal({
        //     title: 'Valida que no eres un robot',
        //      message: 'Valida que no eres un robot',
        //     icon: 'warning',
        //     confirmButtonText: 'Aceptar'
        //   })
        //    }else{
        //    this.$swal({
        //     title: 'successs',
        //      message: 'Valida que no eres un robot',
        //     icon: 'warning',
        //     confirmButtonText: 'Aceptar'
        //   })
        //   this.$refs.reCaptcha.recaptchaExpired();
        //    }
      const { valid } = await this.$refs.form.validate()

        if (valid){
          // this.$root.reCaptcha.showRecaptcha=true
           if(this.$root.reCaptcha.valid){
            this.addProveedor(st);
           }else{
            
             this.$swal({
              title: 'Valida reCaptcha',
             message: 'Valida que no eres un robot',
             icon: 'warning',
            confirmButtonText: 'Entendido'
          })
           }
        } else {

          this.$swal({
            title: 'Información incompleta',
            text: 'Por favor capturar los campos requeridos',
            icon: 'warning',
            confirmButtonText: 'Entendido'
          })

          this.btnloading = false
        }
    },
       async addProveedor(st){
      const currentObj = this
      const config = { headers: { 'content-type': 'multipart/form-data' }}
      const formData = new FormData()
        this.disModal=true
      //  const file_ActaConstitutiva = this.file_ActaConstitutiva[0]
      // const file_INE = this.file_INE[0]
      //  const file_ComprobanteDomicilio = this.file_ComprobanteDomicilio[0]
      //  const file_CSF = this.file_CSF[0]
      //  const file_OCOF = this.file_OCOF[0]
      //  const file_AltaIMSS = this.file_AltaIMSS[0]
      //  const file_OCOIMSS = this.file_OCOIMSS[0]
      //  const file_EstCuenta = this.file_EstCuenta[0]
      //  const file_CTB = this.file_CTB[0]
      //  const file_CV = this.file_CV[0]
      //  const file_REPSE = this.file_REPSE[0]
      //  const file_DAER = this.file_DAER[0]

      for (let i = 0; i < this.files.length; i++){
          formData.append('files'+i,this.files[i])
      }

      formData.append('nfiles',this.files.length)
      //   }
      //   if(file_ActaConstitutiva !=''){
      // formData.append('file_ActaConstitutiva', file_ActaConstitutiva)
      //   }

      //    if(file_REPSE !=''){
      // formData.append('file_REPSE', file_REPSE)
      //   }
      
      //    if(file_DAER !=''){
      // formData.append('file_DAER', file_DAER)
      //   }
      //  if(file_INE !=''){
      // formData.append('file_INE', file_INE)
      
      //   }
      //    if(file_ComprobanteDomicilio !=''){
      // formData.append('file_ComprobanteDomicilio', file_ComprobanteDomicilio)

      //   }
      //    if(file_OCOF !=''){
      // formData.append('file_OCOF', file_OCOF)

      //   }
      //    if(file_CSF !=''){
      //   formData.append('file_CSF', file_CSF)
      //   }
      //    if(file_AltaIMSS !=''){
      // formData.append('file_AltaIMSS', file_AltaIMSS)
      //   }
      //    if(file_OCOIMSS !=''){
      // formData.append('file_OCOIMSS', file_OCOIMSS)
      //   }
      //    if(file_EstCuenta !=''){
      // formData.append('file_EstCuenta', file_EstCuenta)

      //   }
      //    if(file_CTB !=''){
      // formData.append('file_CTB', file_CTB)
      //   }
      //    if(file_CV !=''){
      // formData.append('file_CV', file_CV)
      //   }
     
      formData.append('id', this.formProveedor.id)
      formData.append('business_name', this.formProveedor.business_name)
      formData.append('comercial_name', this.formProveedor.comercial_name)
      formData.append('type_person', this.formProveedor.type_person)
      formData.append('rfc', this.formProveedor.rfc)
      formData.append('phone', this.formProveedor.phone)
      formData.append('address', this.formProveedor.address)
      formData.append('email', this.formProveedor.email)
      formData.append('contact', this.formProveedor.contact)
      formData.append('suburb', this.formProveedor.suburb)
      formData.append('cp', this.formProveedor.cp)
      formData.append('state', this.formProveedor.state)
      formData.append('country', this.formProveedor.country)
      formData.append('city', this.formProveedor.city)
      formData.append('web_page', this.formProveedor.web_page)
      formData.append('bank', this.formProveedor.bank)
      formData.append('bank_clabe', this.formProveedor.bank_clabe)
      formData.append('bank_account', this.formProveedor.bank_account)
      formData.append('bank_swift', this.formProveedor.bank_swift)
      formData.append('credit_days', this.formProveedor.credit_days)
      formData.append('currency', this.formProveedor.currency)
      formData.append('classification_main', this.formProveedor.classification_main)
      formData.append('classification_aditional', this.formProveedor.classification_aditional)
      formData.append('status', st)
     

      await Api.post('/suppliers/addSupplierWeb', formData, config).then(res => {
        currentObj.res = res.data
        currentObj.status = res.status

         this.btnloading = false
         if(st==4){
        this.$swal({
            title: 'Completado',
            text: 'Se ha agregado el registro en borrador.',
            icon: 'info',
            confirmButtonText: 'Aceptar'
          })
         }else{
        this.$swal({
            title: 'Completado',
            text: 'Se ha agregado el registro correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
          })
         }
         this.resetForm();
          this.$refs.reCaptcha.recaptchaExpired();

      }).catch(function(error) {
            this.$swal({
            title: 'Error',
           message: 'Ha ocurrido un error',
            icon: 'danger',
            confirmButtonText: 'Aceptar'
          })
      })
        

    },
  
   async deleteSupplier(id){
       const currentObj = this
      const config = { headers: { 'content-type': 'multipart/form-data' }}
      const formData = new FormData()
      
      formData.append('id', id)
         await Api.post('/suppliers/DeleteSupplierWeb', formData, config).then(res => {
        currentObj.res = res.data
        currentObj.status = res.status
           
         this.resetForm();

      }).catch(function(error) {
            this.$swal({
            title: 'Error',
           message: 'Ha ocurrido un error',
            icon: 'danger',
            confirmButtonText: 'Aceptar'
          })
      })
        
    },
   onComboboxKeydown(event) {
      if (event.keyCode === 13) {
       this.formProveedor.classification_aditional.pop();// Prevent Enter key behavior

      }
    },
    async removeFile(file) {
          const currentObj = this
          const config = { headers: { 'content-type': 'multipart/form-data' }}
          const formData = new FormData()
          
          formData.append('id', file.id)
          formData.append('name', file.name)
          formData.append('supplier_id', file.dmiaba_supplier_registration_id)
            await Api.post('/suppliers/DeleteFilesSupplierWeb', formData, config).then(res => {
            currentObj.res = res.data
            currentObj.status = res.status
            this.uploads=res.data.get_document_supplier_all

               this.$swal({
                title: res.data.success,
                message: res.data.success,
                icon: 'success',
                confirmButtonText: 'Aceptar'
              })

          }).catch(function(error) {
                this.$swal({
                title: 'Error',
                message: 'Ha ocurrido un error',
                icon: 'danger',
                confirmButtonText: 'Aceptar'
              })
          })

        }
    }
  }
</script>