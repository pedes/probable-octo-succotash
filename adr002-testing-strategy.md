# ADR 002: API Testing Strategy
Describe here the forces that influence the design decision, including technological, cost-related, and project local. 

## Decision 


## Rationale | Context
The APIs need a solid testing strategy to maintain the quality attributes.

Due to the test-pyramid, we need to implement the following type of tests:

- **Unit testing**: MUnit, more info here: https://docs.mulesoft.com/munit/2.3/
- **Integration testing**: We'll combine BAT CLI from Anypoint/MuleSoft https://docs.mulesoft.com/api-functional-monitoring/bat-bdd-reference and also Newman from Postman: https://learning.postman.com/docs/collections/using-newman-cli/newman-custom-reporters/
  - Rest-assured is another alternative https://rest-assured.io/
- **Performance testing**: We should measure throughput (e.g. requests per sec), and the average response time (for 1 request), with the tools JMeter, or K6 https://k6.io/open-source/ or Artillery, https://www.artillery.io/docs/guides/getting-started/installing-artillery
- **Security testing**: At least start testing the APIs with the OWASP ZAP https://www.zaproxy.org/

## Status
Proposed | Accepted

## Consequences
Describe here the resulting context, after applying the decision. All consequences should be listed, not just the "positive" ones. 
