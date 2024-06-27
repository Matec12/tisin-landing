import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@/components/mui/container";
import Scrollspy from "@/components/scroll-spy";
import Link from "next/link";

const LinkStyled = styled(Link)(({ theme }) => ({
  color: theme.palette.primary[300],
  fontWeight: "600 !important",
  textDecoration: "none"
}));

const sections = [
  {
    id: "section1",
    title: "Introduction",
    details: (
      <Box>
        <Typography variant="textMd">
          This Privacy Policy ("Policy") describes how usetisin.com, Inc.
          ("usetisin.com," "we," "our" or "us") collect, use, process and share
          personal information. This Policy applies to visitors and users
          (individually, "you") of usetisin.com's websites, applications, social
          media accounts, and other services (collectively, our "Services").
          Please note that your use of our Services is additionally subject to
          the usetisin.com User Agreement at{" "}
          <Typography
            component={LinkStyled}
            href="https://www.usetisin.com/terms"
          >
            https://www.usetisin.com/terms
          </Typography>
          . Any capitalized terms in this Policy that are not defined herein
          shall have the same meaning as such defined term in the User
          Agreement.
        </Typography>
      </Box>
    )
  },
  {
    id: "section2",
    title: "Information we use and collect",
    details: (
      <Box>
        <Typography variant="textMd">
          When you use or visit our Services, we collect information directly
          from you (e.g., when you search for or make an online reservation). We
          may also generate information about you (e.g., information about your
          device). In some cases, we also obtain personal information from third
          parties (e.g., search engines, social media, or other third parties).
        </Typography>
      </Box>
    )
  },
  {
    id: "section3",
    title: "How we use your information",
    details: (
      <Box>
        <Typography variant="textMd">
          We use your information to provide our Services, tailor your
          experience, show you transactions made through your usetisin.com User
          Account, send you marketing communications, provide you with more
          relevant advertising and offers that may be of interest to you, and
          for other purposes described below.
        </Typography>
      </Box>
    )
  },
  {
    id: "section4",
    title: "How We Share Your Information",
    details: (
      <Box>
        <Typography variant="textMd">
          We share your information with our service providers (including
          payment processors and hosting providers); with other business
          partners (including advertising partners); with social networking
          services; with third-party services or applications you use to log
          into your usetisin.com account; and others as described below. We
          share information to provide and improve our Services, for our own
          marketing purposes, to facilitate offers and advertising from others
          that may interest you, and for other purposes as described below.
        </Typography>
      </Box>
    )
  },
  {
    id: "section5",
    title: "How We Store Your Information",
    details: (
      <Box>
        <Typography variant="textMd">
          We maintain technical, administrative, and physical security measures
          designed to protect your information. We may retain your information
          for as long as your User Account is active and for a period of time
          thereafter to allow you to re-activate your account without loss of
          information, and as necessary for purposes described below.
        </Typography>
      </Box>
    )
  },
  {
    id: "section6",
    title: "How We Store Your Information",
    details: (
      <Box>
        <Typography variant="textMd">
          We maintain technical, administrative, and physical security measures
          designed to protect your information. We may retain your information
          for as long as your User Account is active and for a period of time
          thereafter to allow you to re-activate your account without loss of
          information, and as necessary for purposes described below.
        </Typography>
      </Box>
    )
  },
  {
    id: "section7",
    title: "Cookies",
    details: (
      <Box>
        <Typography variant="textMd">
          We use cookies and similar technologies to help provide our Services,
          and offer you a more personalized user experience.
        </Typography>
      </Box>
    )
  },
  {
    id: "section8",
    title: "Links to other Websites",
    details: (
      <Box>
        <Typography variant="textMd">
          Our Services may contain links to other websites or services that are
          not owned or controlled by usetisin.com, [including links to websites
          of other business partners (including advertisers)].
        </Typography>
      </Box>
    )
  },
  {
    id: "section9",
    title: "Changes to this Policy",
    details: (
      <Box>
        <Typography variant="textMd">
          We update this Policy from time to time, and changes will be effective
          when posted (as identified in the Policy).
        </Typography>
      </Box>
    )
  },
  {
    id: "section10",
    title: "Contact Information",
    details: (
      <Box>
        <Typography variant="textMd">
          If you have any questions about this Policy or the way your personal
          information has been used, please contact us at{" "}
          <Typography component={LinkStyled} href="mailto:privacy@usetisin.com">
            privacy@usetisin.com
          </Typography>{" "}
          or using the contact details set out below.
        </Typography>
      </Box>
    )
  }
];

const PrivacyPolicyListWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(16, 0, 0, 0),
  marginBottom: theme.spacing(40),
  backgroundColor: theme.palette.common.white
}));

const PrivacyPolicyList = () => {
  return (
    <PrivacyPolicyListWrapper>
      <Container>
        <Scrollspy sections={sections} />
      </Container>
    </PrivacyPolicyListWrapper>
  );
};

export { PrivacyPolicyList };
