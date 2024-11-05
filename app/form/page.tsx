import { Section, Container } from "@/components/craft";
import { InputForm } from "@/components/main/form";

export default function Page() {
  return (
    <Section>
      <Container>
        {/* Wrapper for border and bubble effect */}
        <div className="border-4 border-blue-500 p-6 rounded-xl shadow-lg">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center space-y-4 mt-10">
            <h1 className="text-3xl font-semibold">Submit your information!</h1>
            <h3 className="text-lg max-w-lg">
              Please fill out the form below to submit your information.
            </h3>
          </div>
          {/* Form */}
          <div>
            <InputForm />
          </div>
        </div> {/* This is the missing closing tag */}
      </Container>
    </Section>
  );
}