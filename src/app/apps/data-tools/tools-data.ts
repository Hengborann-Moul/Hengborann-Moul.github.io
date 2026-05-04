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
      'A unified analytics engine for large-scale data processing. Includes APIs in Scala, Java, Python (known as PySpark), and R (SparkR).',
    url: 'https://spark.apache.org/',
    category: 'Analytics',
  },
  {
    id: 'apache-beam',
    icon: '/icons/data-tools/apache-beam.svg',
    name: 'Apache Beam',
    description:
      'An open-source implementation of Google DataFlow. Provides capabilities of batch and streaming data processing jobs that run on any execution engine, including Spark, Flink, or its own DirectRunner. Supports multiple APIs in Java, Python, and Go.',
    url: 'https://beam.apache.org/',
    category: 'Analytics',
  },
  {
    id: 'apache-flink',
    icon: '/icons/data-tools/apache-flink.svg',
    name: 'Apache Flink',
    description: 'Stateful computations over data streams.',
    url: 'https://flink.apache.org/',
    category: 'Analytics',
  },
  {
    id: 'trino',
    icon: '/icons/data-tools/trino.svg',
    name: 'Trino',
    description:
      'Distributed SQL Query Engine for Big Data. Formerly known as PrestoSQL.',
    url: 'https://trino.io/',
    category: 'Analytics',
  },

  // Business Intelligence
  {
    id: 'apache-superset',
    icon: '/icons/data-tools/apache-superset.svg',
    name: 'Apache Superset',
    description:
      'A modern, enterprise-ready business intelligence web application.',
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
      'An easy way for everyone in your company to ask questions and learn from data.',
    url: 'https://www.metabase.com/',
    category: 'Business Intelligence',
  },
  {
    id: 'redash',
    icon: '/icons/data-tools/redash.svg',
    name: 'Redash',
    description: 'All the tools to unlock your data.',
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
    description: 'SQL parser, building blocks for datastores.',
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
    description: 'A high performance real-time analytics database.',
    url: 'https://druid.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'apache-hbase',
    icon: '/icons/data-tools/apache-hbase.svg',
    name: 'Apache HBase',
    description: 'Open Source non-relational distributed database.',
    url: 'https://hbase.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'apache-pinot',
    icon: '/icons/data-tools/apache-pinot.svg',
    name: 'Apache Pinot',
    description: 'A realtime distributed OLAP datastore.',
    url: 'https://pinot.apache.org/',
    category: 'Datastores',
  },
  {
    id: 'clickhouse',
    icon: '/icons/data-tools/clickhouse.svg',
    name: 'ClickHouse',
    description: 'Open Source distributed column-oriented DBMS.',
    url: 'https://clickhouse.com/',
    category: 'Datastores',
  },
  {
    id: 'influxdb',
    icon: '/icons/data-tools/influxdb.svg',
    name: 'InfluxDB',
    description: 'Purpose-Built Open Source Time Series Database.',
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
      "The World's Most Advanced Open Source Relational Database.",
    url: 'https://www.postgresql.org/',
    category: 'Datastores',
  },
  {
    id: 'questdb',
    icon: '/icons/data-tools/questdb.svg',
    name: 'QuestDB',
    description:
      'Open Source Time Series Database with a focus on performance and simplicity.',
    url: 'https://questdb.io/',
    category: 'Datastores',
  },

  // Data Governance and Registries
  {
    id: 'amundsen',
    icon: '/icons/data-tools/amundsen.svg',
    name: 'Amundsen',
    description: 'Metadata catalogue.',
    url: 'https://github.com/lyft/amundsen',
    category: 'Data Governance and Registries',
  },
  {
    id: 'apache-atlas',
    icon: '/icons/data-tools/apache-atlas.svg',
    name: 'Apache Atlas',
    description:
      'Data governance and metadata framework for Hadoop.',
    url: 'https://atlas.apache.org',
    category: 'Data Governance and Registries',
  },
  {
    id: 'datahub',
    icon: '/icons/data-tools/datahub.svg',
    name: 'DataHub',
    description:
      'A Generalized Metadata Search & Discovery Tool.',
    url: 'https://github.com/linkedin/datahub',
    category: 'Data Governance and Registries',
  },
  {
    id: 'metacat',
    icon: '/icons/data-tools/metacat.svg',
    name: 'Metacat',
    description: 'Unified metadata exploration API service.',
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
      'Generalized metadata, search, and lineage tool.',
    url: 'https://github.com/open-metadata/OpenMetadata',
    category: 'Data Governance and Registries',
  },

  // Data Virtualization
  {
    id: 'apache-drill',
    icon: '/icons/data-tools/apache-drill.svg',
    name: 'Apache Drill',
    description:
      'Schema-free SQL Query Engine for Hadoop, NoSQL and Cloud Storage.',
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
      'A relational abstraction of different information sources.',
    url: 'http://teiid.io/',
    category: 'Data Virtualization',
  },
  {
    id: 'presto',
    icon: '/icons/data-tools/presto.svg',
    name: 'Presto',
    description: 'Distributed SQL Query Engine for Big Data.',
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
    description: 'A data serialization system.',
    url: 'https://avro.apache.org/',
    category: 'Formats',
  },
  {
    id: 'apache-parquet',
    icon: '/icons/data-tools/apache-parquet.svg',
    name: 'Apache Parquet',
    description: 'A columnar storage format.',
    url: 'https://parquet.apache.org/',
    category: 'Formats',
  },
  {
    id: 'apache-orc',
    icon: '/icons/data-tools/apache-orc.svg',
    name: 'Apache ORC',
    description: 'Another columnar storage format.',
    url: 'https://orc.apache.org/',
    category: 'Formats',
  },
  {
    id: 'apache-thrift',
    icon: '/icons/data-tools/apache-thrift.svg',
    name: 'Apache Thrift',
    description:
      'Data type and service interface definitions and code generator.',
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
      'A data interchange format and capability-based RPC system.',
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
      'Easily integrate various systems consuming or producing data.',
    url: 'https://camel.apache.org/',
    category: 'Integration',
  },
  {
    id: 'kafka-connect',
    icon: '/icons/data-tools/kafka-connect.svg',
    name: 'Kafka Connect',
    description:
      'Reusable framework to handle data int-and-out of Apache Kafka.',
    url: 'https://kafka.apache.org/documentation/#connect',
    category: 'Integration',
  },
  {
    id: 'logstash',
    icon: '/icons/data-tools/logstash.svg',
    name: 'Logstash',
    description: 'Open Source server-side data processing pipeline.',
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
    description: 'Flexible & Powerful Multi-Protocol Messaging.',
    url: 'https://activemq.apache.org/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'apache-kafka',
    icon: '/icons/data-tools/apache-kafka.svg',
    name: 'Apache Kafka',
    description:
      'A distributed commit log with messaging capabilities.',
    url: 'https://kafka.apache.org/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'apache-pulsar',
    icon: '/icons/data-tools/apache-pulsar.svg',
    name: 'Apache Pulsar',
    description: 'A distributed pub-sub messaging system.',
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
      'A simple, secure and high performance messaging system.',
    url: 'https://nats.io/',
    category: 'Messaging Infrastructure',
  },
  {
    id: 'rabbitmq',
    icon: '/icons/data-tools/rabbitmq.svg',
    name: 'RabbitMQ',
    description: 'A message broker.',
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
      'An open-source universal, high-performance messaging library.',
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
    description: 'A distributed stream processing framework.',
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
    description: 'A distributed realtime computation system.',
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
