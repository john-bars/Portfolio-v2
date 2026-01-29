import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Hr,
  Heading,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface EmailTemplateProps {
  message: string;
  senderName?: string;
  senderEmail: string;
  subject?: string;
}

export default function EmailTemplate({
  message,
  senderName,
  senderEmail,
  subject,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-8">
          <Container className="bg-white rounded-lg shadow-sm max-w-150 p-0 overflow-hidden">
            {/* Header */}
            <Container className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <Heading className="text-lg font-semibold text-gray-800 m-0">
                New Message Received
              </Heading>
            </Container>

            {/* Content */}
            <Container className="px-6 py-6 text-sm text-gray-700 leading-relaxed">
              <Text className="mb-6">{message}</Text>

              <Hr className="border-gray-200 my-6" />

              <Text>
                <strong>Sender Name:</strong> {senderName || "Anonymous"}
              </Text>
              <Text>
                <strong>Sender Email:</strong> {senderEmail}
              </Text>

              {subject && (
                <Text>
                  <strong>Subject:</strong> {subject}
                </Text>
              )}
            </Container>

            {/* Footer */}
            <Container className="px-6 py-4 border-t border-gray-200 bg-gray-50 text-center">
              <Text className="text-xs text-gray-500 m-0">
                This message was sent from your website contact form.
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
