# ADR [003]: logging-strategy

## Context

We need to set an effective strategy to solve and prevent issues by using log messages and monitoring dashboards.

## Decision

How

Every API must produce the logs in a JSON format, and by default write them in an Asynchronous way, and the verbosity level INFO:

{
  "instant" : {
    "epochSecond" : 1493121664,
    "nanoOfSecond" : 118000000
  },
  "thread" : "main",
  "level" : "INFO",
  "loggerName" : "HelloWorld",
  "marker" : {
    "name" : "child",
    "parents" : [ {
      "name" : "parent",
      "parents" : [ {
        "name" : "grandparent"
      } ]
    } ]
  },
  "message" : "Hello, world!",
 }
 
 Where
 
 APIs needs to set an appender to a 3rd party service, in our case, ELK/Splunk/Datadog/Grafana Loki
 
 Example for Splunk
 
 <SplunkHttp name="Splunk"
		 url="https://prd-p-l8itz.splunkcloud.com:8088/"
		 token="HEC_TOKEN"
		 batch_size_count="1"
		 index="main"
		 disableCertificateValidation="true">
		 <PatternLayout pattern="[%d{MM-dd HH:mm:ss}] %-5p %c{1} [%t]:  %m%n" />
		</SplunkHttp>
 
 

## Status

Accepted

## Consequences

[Describe the consequences, both positive and negative, of the decision, including any risks or dependencies.]

## Related documents

[List any related documents, such as requirements or design documents, that influenced the decision.]

### References
- https://github.com/joelparkerhenderson/architecture-decision-record
- https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/examples/metrics-monitors-alerts/index.md
- https://github.com/pmerson/ADR-template
- https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/examples/timestamp-format/index.md
- https://cloud.google.com/architecture/architecture-decision-records
