<template>
  <div>
    <Navbar />
    <ContactShowcase src="/img/contact.jpg" />
    <Container>
      <GridRow>
        <GridItem :sm="12">
          <Card>
            <CardBody>
              <CardHeader :className="'indigo-text center-align'">
                <span
                  style="display:inline-block;margin-bottom:40px; font-weight:600"
                >Contact WeDoYourFarm</span>
              </CardHeader>

              <InputField
                type="text"
                id="name"
                label="Enter Your Name"
                value="My name"
                v-model="name"
                :className="'noactive'"
              />
              <InputField
                type="email"
                id="email"
                v-model="email"
                label="Enter Your Email"
                :className="'noactive'"
              />
              <InputField
                type="text"
                id="subject"
                v-model="subject"
                label="Enter Subject"
                :className="'noactive'"
              />
              <TextArea
                v-model="message"
                id="message"
                label="Enter Your Message"
                :className="'noactive'"
              />
            </CardBody>

            <LinearProgress v-if="loading" />
            <CardAction :className="'right-align'">
              <Flat :disabled="loading" @click="handleSend">Send</Flat>
            </CardAction>
          </Card>
        </GridItem>
      </GridRow>
    </Container>
  </div>
</template>

<script>
import ContactShowcase from "~/components/showcase/AboutShowcase";
import Alert from "~/components/alert/Alert";
import Navbar from "~/components/navbar/Navbar";
import LinearProgress from "~/components/linear-progress/Progress";
export default {
  components: {
    ContactShowcase,
    Navbar,
    LinearProgress
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      subject: ""
    };
  },
  methods: {
    handleSend() {
      const errors = this.validateForm({
        name: this.name,
        email: this.email,
        message: this.message,
        subject: this.subject
      });
      if (Object.keys(errors).length > 0) {
        const errorMsgs = [];
        for (let key in errors) {
          errorMsgs.push(errors[key]);
        }
        Alert({ message: errorMsgs.join(","), color: "red" });
        return;
      }
      const email = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
        recipients: ["andysopuru@gmail.com"]
      };
      this.$store.dispatch("sendEmail", email);
    },
    validateForm(values) {
      const errors = {};
      if (!values.name) {
        errors.name = "Your name is required";
      } else if (!values.email) {
        errors.email = "Your email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Your email is invalid";
      } else if (!values.subject) {
        errors.subject = "Subject is required";
      } else if (!values.message) {
        errors.message = "Your are required to enter message";
      }
      return errors;
    }
  },
  watch: {
    name(oldVal, newVal) {
      // console.log("oldval", oldVal);
      // console.log("newVal ", newVal);
    }
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    }
  }
};
</script>
