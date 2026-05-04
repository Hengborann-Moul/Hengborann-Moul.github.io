export interface Tool {
  id: string;
  icon: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export const toolsData: Tool[] = [
  // Analytics
  {
    id: 'apache-spark',
    icon: '/icons/data-tools/apache-spark.svg',
    name: 'Apache Spark',
    description:
      'A unified analytics engine for large-scale data processing with built-in modules for SQL, streaming, machine learning, and graph processing. Includes APIs in Scala, Java, Python (PySpark), and R (SparkR), offering in-memory computing for high performance on batch and real-time workloads.',
    url: 'https://spark.apache.org/',
    category: 'Analytics',
  },
  {
    id: 'apache-beam',
    icon: '/icons/data-tools/apache-beam.svg',
    name: 'Apache Beam',
    description:
      'An open-source implementation of Google DataFlow that provides a unified programming model for both batch and streaming data processing jobs. Pipelines can run on any execution engine—including Spark, Flink, Google Cloud Dataflow, or the local DirectRunner—and support multiple SDKs in Java, Python, and Go.',
    url: 'https://beam.apache.org/',
    category: 'Analytics',
  },
  {
    id: 'apache-flink',
    icon: '/icons/data-tools/apache-flink.svg',
    name: 'Apache Flink',
    description:
      'An open-source, unified stream processing and batch processing framework. Flink provides high-throughput, low-latency streaming with exactly-once semantics, stateful computations, event-time processing, and seamless integration with popular storage systems and connectors.',
    url: 'https://flink.apache.org/',
    category: 'Analytics',
  },
  {
    id: 'trino',
    icon: '/icons/data-tools/trino.svg',
    name: 'Trino',
    description:
      'A high-performance, distributed SQL query engine designed for fast analytic queries across heterogeneous data sources. Formerly known as PrestoSQL, Trino can query data where it lives—including Hive, Cassandra, relational databases, and proprietary data stores—without requiring data movement.',
    url: 'https://trino.io/',
    category: 'Analytics',
  },

  // Business Intelligence
  {
    id: 'apache-superset',
    icon: '/icons/data-tools/apache-superset.svg',
    name: 'Apache Superset',
    description:
      'A modern, enterprise-ready business intelligence web application that enables users to explore and visualize data through an intuitive interface. It supports a wide range of chart types, SQL-based data exploration, real-time analytics, role-based access control, and integrates with most SQL-speaking databases.',
    url: 'https://superset.incubator.apache.org/',
    category: 'Business Intelligence',
  },
  {
    id: 'hue',
    icon: '/icons/data-tools/hue.svg',
    name: 'HUE',
    description:
      'The Hadoop User Interface. Similar to Superset, but interfaces between RDBMS, Hive, Impala, HBase, Spark, HDFS & S3, Oozie, Pig, YARN Job Explorer, and more. Offers an extensible Django environment for custom app integration.',
    url: 'https://gethue.com/',
    category: 'Business Intelligence',
  },
  {
    id: 'metabase',
    icon: '/icons/data-tools/metabase.svg',
    name: 'Metabase',
    description:
      'An open-source business intelligence and analytics platform that makes it easy for everyone in an organization to ask questions and learn from data. Features include a visual query builder, interactive dashboards, native SQL support, automated reporting, and embedding capabilities.',
    url: 'https://www.metabase.com/',
    category: 'Business Intelligence',
  },
  {
    id: 'redash',
    icon: '/icons/data-tools/redash.svg',
    name: 'Redash',
    description:
      'An open-source data visualization and collaboration platform designed to help teams make sense of their data. It enables users to query data from multiple sources, visualize results with diverse chart types, build interactive dashboards, and share insights across the organization.',
    url: 'https://redash.io/',
    category: 'Business Intelligence',
  },

  // Data Lakehouse
  {
    id: 'delta-lake',
    icon: '/icons/data-tools/delta-lake.svg',
    name: 'Delta Lake',
    description:
      'Open-source storage framework that enables building a lakehouse architecture with compute engines including Spark, PrestoDB, Flink, Trino, and Hive and APIs for Scala, Java, Rust, Ruby, and Python.',
    url: 'https://delta.io/',
    category: 'Data Lakehouse',
  },
  {
    id: 'apache-hudi',
    icon: '/icons/data-tools/apache-hudi.svg',
    name: 'Apache Hudi',
    description:
      'Transactional data lake platform that brings database and data warehouse capabilities to the data lake. Hudi reimagines slow old-school batch data processing with a powerful new incremental processing framework for low latency minute-level analytics.',
    url: 'https://hudi.apache.org/',
    category: 'Data Lakehouse',
  },
  {
    id: 'apache-iceberg',
    icon: '/icons/data-tools/apache-iceberg.svg',
    name: 'Apache Iceberg',
    description:
      'High-performance format for huge analytic tables. Iceberg brings the reliability and simplicity of SQL tables to big data, while making it possible for engines like Spark, Trino, Flink, Presto, Hive and Impala to safely work with the same tables, at the same time.',
    url: 'https://iceberg.apache.org/',
    category: 'Data Lakehouse',
  },

  // Change Data Capture
  {
    id: 'debezium',
    icon: '/icons/data-tools/debezium.svg',
    name: 'Debezium',
    description:
      'Change data capture for MySQL, Postgres, MongoDB, SQL Server and others.',
    url: 'https://debezium.io/',
    category: 'Change Data Capture',
  },
  {
    id: 'maxwell',
    icon: '/icons/data-tools/maxwell.svg',
    name: 'Maxwell',
    description:
      "Maxwell's daemon, a MySQL-to-JSON Kafka producer.",
    url: 'https://github.com/zendesk/maxwell',
    category: 'Change Data Capture',
  },

  // Datastores
  {
    id: 'apache-calcite',
    icon: '/icons/data-tools/apache-calcite.svg',
    name: 'Apache Calcite',
    description:
      'A dynamic data management framework and SQL parser that provides the building blocks for building custom database systems and datastores. It includes a cost-based query optimizer, an extensible SQL parser and validator, and adapters for connecting to various backend data sources.',
    url: 'https://calcite.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'apache-cassandra',
    icon: '/icons/data-tools/apache-cassandra.svg',
    name: 'Apache Cassandra',
    description:
      'Open Source distributed wide column store, NoSQL database.',
    url: 'http://cassandra.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'apache-druid',
    icon: '/icons/data-tools/apache-druid.svg',
    name: 'Apache Druid',
    description:
      'A high-performance, real-time analytics database designed for fast slice-and-dice analytics on large-scale event-driven data. Druid excels at streaming data ingestion, sub-second query latency, high concurrency, and is commonly used for clickstream analytics, APM, and IoT data.',
    url: 'https://druid.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'apache-hbase',
    icon: '/icons/data-tools/apache-hbase.svg',
    name: 'Apache HBase',
    description:
      'An open-source, non-relational, distributed database modeled after Google\'s Bigtable. HBase provides random, real-time read/write access to big data stored in HDFS or other distributed file systems, offering strong consistency, automatic sharding, and linear scalability.',
    url: 'https://hbase.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'apache-pinot',
    icon: '/icons/data-tools/apache-pinot.svg',
    name: 'Apache Pinot',
    description:
      'A real-time distributed OLAP datastore designed to deliver scalable, low-latency analytics on large datasets. Pinot supports streaming and batch ingestion, multi-tenant clusters, complex queries with joins, and is optimized for user-facing analytics and time-series data.',
    url: 'https://pinot.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'clickhouse',
    icon: '/icons/data-tools/clickhouse.svg',
    name: 'ClickHouse',
    description:
      'A fast, open-source, column-oriented DBMS for online analytical processing (OLAP). ClickHouse excels at real-time analytics with vectorized query execution, full SQL support, high compression ratios, and the ability to handle petabytes of data with billions of rows per second throughput.',
    url: 'https://clickhouse.com/',
    category: 'Datastores',
  },
  {
    id: 'influxdb',
    icon: '/icons/data-tools/influxdb.svg',
    name: 'InfluxDB',
    description:
      'An open-source time series database purpose-built for high-write and query workloads. InfluxDB is optimized for storing and retrieving time-stamped data such as metrics and events, featuring a custom query language (InfluxQL/Flux), retention policies, and downsampling capabilities.',
    url: 'https://www.influxdata.com/',
    category: 'Datastores',
  },
  {
    id: 'minio',
    icon: '/icons/data-tools/minio.svg',
    name: 'MinIO',
    description:
      'MinIO is a high performance, distributed object storage system and AWS S3 compatible.',
    url: 'https://min.io/',
    category: 'Datastores',
  },
  {
    id: 'postgres',
    icon: '/icons/data-tools/postgres.svg',
    name: 'Postgres',
    description:
      'The world\'s most advanced open-source relational database system. PostgreSQL offers robust SQL compliance, extensibility through custom data types and functions, ACID transactions, full-text search, JSON/JSONB support, spatial data via PostGIS, and strong reliability and data integrity.',
    url: 'https://www.postgresql.org/',
    category: 'Datastores',
  },
  {
    id: 'questdb',
    icon: '/icons/data-tools/questdb.svg',
    name: 'QuestDB',
    description:
      'An open-source, high-performance time series database with a focus on performance and simplicity. QuestDB supports standard SQL with time-series extensions, relational and time-series joins, and achieves high ingestion throughput with low query latency for financial and IoT data.',
    url: 'https://questdb.io/',
    category: 'Datastores',
  },

  // Data Governance and Registries
  {
    id: 'amundsen',
    icon: '/icons/data-tools/amundsen.svg',
    name: 'Amundsen',
    description:
      'An open-source data discovery and metadata engine developed by Lyft. Amundsen improves productivity of data analysts, data scientists, and engineers by indexing data resources and powering a page-rank-style search based on usage patterns, table/column descriptions, and data lineage.',
    url: 'https://github.com/lyft/amundsen',
    category: 'Data Governance and Registries',
  },
  {
    id: 'apache-atlas',
    icon: '/icons/data-tools/apache-atlas.svg',
    name: 'Apache Atlas',
    description:
      'An open-source data governance and metadata framework for Hadoop ecosystems. Atlas provides metadata management, data classification, lineage tracking, and policy enforcement capabilities, enabling organizations to catalog, classify, and govern data assets across the enterprise.',
    url: 'https://atlas.apache.org',
    category: 'Data Governance and Registries',
  },
  {
    id: 'datahub',
    icon: '/icons/data-tools/datahub.svg',
    name: 'DataHub',
    description:
      'An open-source metadata platform for the modern data stack, originally built at LinkedIn. DataHub enables data discovery, observability, and governance with automated metadata ingestion, rich data lineage, impact analysis, and programmatic metadata management via APIs.',
    url: 'https://github.com/linkedin/datahub',
    category: 'Data Governance and Registries',
  },
  {
    id: 'metacat',
    icon: '/icons/data-tools/metacat.svg',
    name: 'Metacat',
    description:
      'A unified metadata exploration API service developed by Netflix. Metacat federates metadata from various data stores including Hive, RDS, Teradata, Redshift, S3, and Cassandra, providing a single interface for data discovery and reducing the need for users to learn multiple metastores.',
    url: 'https://github.com/Netflix/metacat',
    category: 'Data Governance and Registries',
  },
  {
    id: 'elementary',
    icon: '/icons/data-tools/elementary.svg',
    name: 'Elementary',
    description:
      'Data reliability solution, starting with plug-and-play data lineage and datasets operational status.',
    url: 'https://github.com/elementary-data/elementary-lineage',
    category: 'Data Governance and Registries',
  },
  {
    id: 'monosi',
    icon: '/icons/data-tools/monosi.svg',
    name: 'Monosi',
    description: 'Data observability & monitoring platform.',
    url: 'https://github.com/monosidev/monosi',
    category: 'Data Governance and Registries',
  },
  {
    id: 'openmetadata',
    icon: '/icons/data-tools/openmetadata.svg',
    name: 'OpenMetadata',
    description:
      'An open-source unified metadata platform for data discovery, governance, and collaboration. OpenMetadata centralizes metadata from diverse data sources, provides end-to-end data lineage, supports data quality profiling, and enables teams to document and understand their data assets.',
    url: 'https://github.com/open-metadata/OpenMetadata',
    category: 'Data Governance and Registries',
  },

  // Data Virtualization
  {
    id: 'apache-drill',
    icon: '/icons/data-tools/apache-drill.svg',
    name: 'Apache Drill',
    description:
      'An open-source, schema-free SQL query engine for big data exploration. Drill enables interactive analysis on nested data in non-relational datastores such as Hadoop, NoSQL databases (MongoDB, HBase), and cloud storage (S3, Azure Blob, Google Cloud Storage) without requiring predefined schemas.',
    url: 'https://drill.apache.org/',
    category: 'Data Virtualization',
  },
  {
    id: 'dremio',
    icon: '/icons/data-tools/dremio.svg',
    name: 'Dremio',
    description:
      'A data lake engine. Provides an Apache Arrow-based query and acceleration engine together with the ability to create an IT-governed self-service layer for data scientists and analysts.',
    url: 'https://github.com/dremio/dremio-oss',
    category: 'Data Virtualization',
  },
  {
    id: 'teiid',
    icon: '/icons/data-tools/teiid.svg',
    name: 'Teiid',
    description:
      'An open-source data virtualization system that provides a relational abstraction of various information sources. Teiid allows applications to access and federate data from multiple heterogeneous sources—including databases, web services, and files—through a single, unified JDBC/ODBC interface.',
    url: 'http://teiid.io/',
    category: 'Data Virtualization',
  },
  {
    id: 'presto',
    icon: '/icons/data-tools/presto.svg',
    name: 'Presto',
    description:
      'A high-performance, distributed SQL query engine for big data. Originally developed at Facebook, Presto enables querying data where it lives across diverse sources including HDFS, S3, Cassandra, MySQL, and more, supporting both interactive analytics and long-running batch queries.',
    url: 'https://prestodb.io/',
    category: 'Data Virtualization',
  },

  // Data Orchestration
  {
    id: 'alluxio',
    icon: '/icons/data-tools/alluxio.svg',
    name: 'Alluxio',
    description:
      'Scalable, multi-tiered distributed caching for HDFS, S3, Ceph, NFS, and related filestores. Provides integrations for SQL queries into a Catalog from Spark, Hive, and Presto.',
    url: 'https://github.com/Alluxio/alluxio',
    category: 'Data Orchestration',
  },
  {
    id: 'dbt',
    icon: '/icons/data-tools/dbt.svg',
    name: 'dbt',
    description:
      'Empowering data analysts and engineers to apply methodologies akin to those used by software engineers for constructing applications, dbt ensures data transformation processes align with established practices.',
    url: 'https://www.getdbt.com/',
    category: 'Data Orchestration',
  },

  // Formats
  {
    id: 'apache-avro',
    icon: '/icons/data-tools/apache-avro.svg',
    name: 'Apache Avro',
    description:
      'A row-based data serialization system that provides rich data structures and a compact, fast binary format. Avro features dynamic typing, code generation for multiple languages, and a schema registry, making it ideal for Hadoop ecosystems, Kafka messages, and RPC.',
    url: 'https://avro.apache.org/',
    category: 'Formats',
  },
  {
    id: 'apache-parquet',
    icon: '/icons/data-tools/apache-parquet.svg',
    name: 'Apache Parquet',
    description:
      'An open-source, column-oriented storage format optimized for complex nested data structures. Parquet provides efficient compression and encoding schemes, predicate pushdown, and is designed to bring interoperability between big data processing frameworks like Spark, Hive, and Impala.',
    url: 'https://parquet.apache.org/',
    category: 'Formats',
  },
  {
    id: 'apache-orc',
    icon: '/icons/data-tools/apache-orc.svg',
    name: 'Apache ORC',
    description:
      'A high-performance, columnar storage format for Hadoop-based workloads. ORC provides efficient compression, fast query performance through predicate pushdown and block-level column filters, and is optimized for both read-heavy analytics and write operations in Hive and Spark.',
    url: 'https://orc.apache.org/',
    category: 'Formats',
  },
  {
    id: 'apache-thrift',
    icon: '/icons/data-tools/apache-thrift.svg',
    name: 'Apache Thrift',
    description:
      'A scalable cross-language serialization and RPC framework originally developed at Facebook. Thrift combines a software stack with a code generation engine to build services that work efficiently between multiple programming languages including C++, Java, Python, PHP, and Go.',
    url: 'https://thrift.apache.org/',
    category: 'Formats',
  },
  {
    id: 'apache-arrow',
    icon: '/icons/data-tools/apache-arrow.svg',
    name: 'Apache Arrow',
    description:
      'A cross-language development platform for in-memory data. It specifies a standardized, language-independent, columnar memory format for flat and hierarchical data, organized for efficient analytic operations on modern hardware. It also provides computational libraries and zero-copy IPC and streaming messaging.',
    url: 'https://arrow.apache.org/',
    category: 'Formats',
  },
  {
    id: 'capn-proto',
    icon: '/icons/data-tools/capn-proto.svg',
    name: "Cap'n Proto",
    description:
      'An insanely fast data interchange format and capability-based RPC system. Cap\'n Proto features zero-copy deserialization, schema evolution, and a compact binary format, making it significantly faster than Protocol Buffers and JSON for many use cases.',
    url: 'https://capnproto.org/',
    category: 'Formats',
  },
  {
    id: 'flatbuffers',
    icon: '/icons/data-tools/flatbuffers.svg',
    name: 'FlatBuffers',
    description:
      'An efficient cross platform serialization library for C++, C#, C, Go, Java, JavaScript, Lobster, Lua, TypeScript, PHP, Python, and Rust.',
    url: 'https://google.github.io/flatbuffers/',
    category: 'Formats',
  },
  {
    id: 'messagepack',
    icon: '/icons/data-tools/messagepack.svg',
    name: 'MessagePack',
    description:
      'An efficient binary serialization format. It lets you exchange data among multiple languages like JSON.',
    url: 'https://msgpack.org/index.html',
    category: 'Formats',
  },
  {
    id: 'protocol-buffers',
    icon: '/icons/data-tools/protocol-buffers.svg',
    name: 'Protocol Buffers',
    description:
      "Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data.",
    url: 'https://developers.google.com/protocol-buffers',
    category: 'Formats',
  },

  // Integration
  {
    id: 'apache-camel',
    icon: '/icons/data-tools/apache-camel.svg',
    name: 'Apache Camel',
    description:
      'An open-source integration framework based on Enterprise Integration Patterns. Camel enables users to define routing and mediation rules in a variety of domain-specific languages, connecting diverse systems and protocols including HTTP, FTP, JMS, and databases with minimal boilerplate.',
    url: 'https://camel.apache.org/',
    category: 'Integration',
  },
  {
    id: 'kafka-connect',
    icon: '/icons/data-tools/kafka-connect.svg',
    name: 'Kafka Connect',
    description:
      'A scalable and reliable framework for streaming data between Apache Kafka and external systems. Kafka Connect provides a standard way to import data from source systems into Kafka and export Kafka data to sink systems, with fault tolerance, elasticity, and no custom code required.',
    url: 'https://kafka.apache.org/documentation/#connect',
    category: 'Integration',
  },
  {
    id: 'logstash',
    icon: '/icons/data-tools/logstash.svg',
    name: 'Logstash',
    description:
      'An open-source server-side data processing pipeline that ingests, transforms, and ships data to your preferred storage backend. Part of the Elastic Stack, Logstash supports a wide variety of input sources, filter plugins for parsing and enriching data, and multiple output destinations.',
    url: 'https://www.elastic.co/logstash',
    category: 'Integration',
  },
  {
    id: 'telegraf',
    icon: '/icons/data-tools/telegraf.svg',
    name: 'Telegraf',
    description:
      'A plugin-driven server agent writen in Go (deployed as a single binary with no external dependencies) for collecting and sending metrics and events from databases, systems, and IoT sensors. Offers hundreds of existing plugins.',
    url: 'https://github.com/influxdata/telegraf',
    category: 'Integration',
  },

  // Messaging Infrastructure
  {
    id: 'apache-activemq',
    icon: '/icons/data-tools/apache-activemq.svg',
    name: 'Apache ActiveMQ',
    description:
      'A flexible, powerful, multi-protocol open-source message broker written in Java. ActiveMQ supports JMS 1.1 and 2.0, STOMP, AMQP, and MQTT, providing reliable messaging, clustering, failover, and advanced features like message groups and virtual destinations.',
    url: 'https://activemq.apache.org/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'apache-kafka',
    icon: '/icons/data-tools/apache-kafka.svg',
    name: 'Apache Kafka',
    description:
      'A distributed event streaming platform capable of handling trillions of events per day. Kafka functions as a distributed commit log with publish-subscribe messaging, providing high throughput, low latency, fault tolerance, and horizontal scalability for real-time data pipelines.',
    url: 'https://kafka.apache.org/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'apache-pulsar',
    icon: '/icons/data-tools/apache-pulsar.svg',
    name: 'Apache Pulsar',
    description:
      'A cloud-native, distributed messaging and streaming platform. Pulsar features multi-tenant architecture, geo-replication, persistent message storage via Apache BookKeeper, unified messaging and streaming APIs, and tiered storage for infinite retention.',
    url: 'https://pulsar.apache.org/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'liiklus',
    icon: '/icons/data-tools/liiklus.svg',
    name: 'Liiklus',
    description:
      'An event gateway that provides reactive gRPC/RSocket access to Kafka-like systems.',
    url: 'http://github.com/bsideup/liiklus',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'nakadi',
    icon: '/icons/data-tools/nakadi.svg',
    name: 'Nakadi',
    description:
      'A distributed event bus that implements a RESTful API abstraction on top of Kafka-like queues.',
    url: 'https://nakadi.io/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'nats',
    icon: '/icons/data-tools/nats.svg',
    name: 'NATS',
    description:
      'A lightweight, high-performance messaging system for distributed systems and microservices. NATS supports pub-sub, request-reply, and queueing patterns with features like JetStream for persistence, leaf nodes for edge connectivity, and minimal resource footprint.',
    url: 'https://nats.io/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'rabbitmq',
    icon: '/icons/data-tools/rabbitmq.svg',
    name: 'RabbitMQ',
    description:
      'A widely deployed open-source message broker that implements Advanced Message Queuing Protocol (AMQP). RabbitMQ supports multiple messaging protocols, reliable delivery, flexible routing, clustering, federation, and plugins for extended functionality.',
    url: 'https://www.rabbitmq.com/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'waltz',
    icon: '/icons/data-tools/waltz.svg',
    name: 'Waltz',
    description:
      'A quorum-based distributed write-ahead log for replicating transactions.',
    url: 'https://github.com/wepay/waltz',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'zeromq',
    icon: '/icons/data-tools/zeromq.svg',
    name: 'ZeroMQ',
    description:
      'An open-source universal messaging library and concurrency framework. ZeroMQ provides sockets that carry atomic messages across various transports (in-process, inter-process, TCP, multicast) with patterns like pub-sub, request-reply, and pipeline, without requiring a dedicated broker.',
    url: 'https://zeromq.org/',
    category: 'Messaging Infrastructure',
  },

  // Specifications and Standards
  {
    id: 'cloudevents',
    icon: '/icons/data-tools/cloudevents.svg',
    name: 'CloudEvents',
    description:
      'A specification for describing event data in a common way.',
    url: 'https://cloudevents.io/',
    category: 'Specifications and Standards',
  },

  // Stream Processing
  {
    id: 'apache-kafka-streams',
    icon: '/icons/data-tools/apache-kafka-streams.svg',
    name: 'Apache Kafka Streams',
    description:
      'A client library for building applications and microservices, where the input and output data are stored in Kafka.',
    url: 'https://kafka.apache.org/documentation/streams/',
    category: 'Stream Processing',
  },
  {
    id: 'apache-samza',
    icon: '/icons/data-tools/apache-samza.svg',
    name: 'Apache Samza',
    description:
      'A distributed stream processing framework that uses Apache Kafka for messaging and YARN for cluster resource management. Samza provides stateful processing, exactly-once semantics, high throughput, and low latency for building real-time applications.',
    url: 'http://samza.apache.org/',
    category: 'Stream Processing',
  },
  {
    id: 'apache-spark-structured-streaming',
    icon: '/icons/data-tools/apache-spark-structured-streaming.svg',
    name: 'Apache Spark Structured Streaming',
    description:
      'A scalable and fault-tolerant stream processing engine built on the Spark SQL engine.',
    url: 'https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html',
    category: 'Stream Processing',
  },
  {
    id: 'apache-storm',
    icon: '/icons/data-tools/apache-storm.svg',
    name: 'Apache Storm',
    description:
      'A free and open-source distributed real-time computation system. Storm makes it easy to reliably process unbounded streams of data for real-time analytics, online machine learning, continuous computation, and distributed RPC with guaranteed message processing.',
    url: 'http://storm.apache.org/',
    category: 'Stream Processing',
  },

  // Testing
  {
    id: 'great-expectations',
    icon: '/icons/data-tools/great-expectations.svg',
    name: 'Great Expectations',
    description:
      'Helps data teams eliminate pipeline debt, through data testing.',
    url: 'https://greatexpectations.io/',
    category: 'Testing',
  },
  {
    id: 'datakitchen-testing',
    icon: '/icons/data-tools/datakitchen-testing.svg',
    name: 'DataKitchen Data Observability',
    description:
      'A full featured data quality profiling and data testing tool: it automatically generates tests for you.',
    url: 'https://github.com/DataKitchen/data-observability-installer/',
    category: 'Testing',
  },

  // Monitoring and Logging
  {
    id: 'prometheus',
    icon: '/icons/data-tools/prometheus.svg',
    name: 'Prometheus',
    description:
      'An open-source systems monitoring and alerting toolkit.',
    url: 'https://prometheus.io/',
    category: 'Monitoring and Logging',
  },
  {
    id: 'grafana',
    icon: '/icons/data-tools/grafana.svg',
    name: 'Grafana',
    description:
      'An open-source analytics and monitoring platform.',
    url: 'https://grafana.com/',
    category: 'Monitoring and Logging',
  },
  {
    id: 'datakitchen-monitoring',
    icon: '/icons/data-tools/datakitchen-monitoring.svg',
    name: 'DataKitchen Data Observability',
    description:
      'A full featured monitoring and alerting software that watches across and down your data estate.',
    url: 'https://github.com/DataKitchen/data-observability-installer/',
    category: 'Monitoring and Logging',
  },

  // Versioning
  {
    id: 'lakefs',
    icon: '/icons/data-tools/lakefs.svg',
    name: 'lakeFS',
    description:
      'Repeatable, atomic and versioned data lake on top of object storage.',
    url: 'https://github.com/treeverse/lakeFS/',
    category: 'Versioning',
  },

  // Workflow Management
  {
    id: 'awesome-workflow-engines',
    icon: '/icons/data-tools/awesome-workflow-engines.svg',
    name: 'Awesome Workflow Engines',
    description:
      'A curated list of awesome open source workflow engines.',
    url: 'https://github.com/meirwah/awesome-workflow-engines',
    category: 'Workflow Management',
  },
  {
    id: 'apache-airflow',
    icon: '/icons/data-tools/apache-airflow.svg',
    name: 'Apache Airflow',
    description:
      'A platform created by community to programmatically author, schedule and monitor workflows.',
    url: 'https://airflow.apache.org/',
    category: 'Workflow Management',
  },
  {
    id: 'apache-nifi',
    icon: '/icons/data-tools/apache-nifi.svg',
    name: 'Apache NiFi',
    description:
      'Apache NiFi supports powerful and scalable directed graphs of data routing, transformation, and system mediation logic.',
    url: 'https://nifi.apache.org/',
    category: 'Workflow Management',
  },
  {
    id: 'knime',
    icon: '/icons/data-tools/knime.svg',
    name: 'KNIME',
    description:
      'KNIME Analytics Platform offers a WYSIWYG Editor for Spark-based workflows, with over 2000+ integrations. Offers visualization and flow analytics in-place. KNIME Server is a commercially licensed component that adds additional features.',
    url: 'https://github.com/knime/',
    category: 'Workflow Management',
  },
  {
    id: 'prefect',
    icon: '/icons/data-tools/prefect.svg',
    name: 'Prefect',
    description:
      'A workflow management system designed for modern infrastructure.',
    url: 'https://github.com/PrefectHQ/prefect/',
    category: 'Workflow Management',
  },
  {
    id: 'dagster',
    icon: '/icons/data-tools/dagster.svg',
    name: 'Dagster',
    description:
      'A data orchestrator for machine learning, analytics, and ETL.',
    url: 'https://github.com/dagster-io/dagster/',
    category: 'Workflow Management',
  },
  {
    id: 'kestra',
    icon: '/icons/data-tools/kestra.svg',
    name: 'Kestra',
    description:
      'Open source data orchestration and scheduling platform with declarative syntax.',
    url: 'https://github.com/kestra-io/kestra',
    category: 'Workflow Management',
  },
  {
    id: 'mage',
    icon: '/icons/data-tools/mage.svg',
    name: 'Mage',
    description:
      'Open source data orchestration and scheduling platform with a rich interactive UI for workflows.',
    url: 'https://github.com/mage-ai/mage-ai',
    category: 'Workflow Management',
  },
];
