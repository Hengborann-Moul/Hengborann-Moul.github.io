#!/bin/bash
set -e

ICONS_DIR="public/icons/data-tools"
mkdir -p "$ICONS_DIR"

# Helper to download icon, fallback to generated SVG on failure
download_or_fallback() {
  local id="$1"
  local url="$2"
  local name="$3"
  local dest="$ICONS_DIR/${id}.svg"

  if [ -n "$url" ]; then
    if curl -sL --max-time 10 -o "$dest" "$url"; then
      # Verify it's a valid SVG
      if head -1 "$dest" | grep -q "<svg\|<!DOCTYPE"; then
        echo "✓ Downloaded: $id"
        return
      fi
    fi
  fi

  # Generate fallback
  local color
  case "$id" in
    apache-beam) color="#f59e0b" ;;
    hue) color="#d97706" ;;
    delta-lake) color="#b45309" ;;
    apache-hudi) color="#fbbf24" ;;
    apache-iceberg) color="#f97316" ;;
    debezium) color="#ea580c" ;;
    maxwell) color="#fdba74" ;;
    apache-calcite) color="#fb923c" ;;
    apache-pinot) color="#fed7aa" ;;
    questdb) color="#fb7185" ;;
    amundsen) color="#e11d48" ;;
    apache-atlas) color="#be123c" ;;
    datahub) color="#f43f5e" ;;
    metacat) color="#e879f9" ;;
    monosi) color="#c026d3" ;;
    openmetadata) color="#a855f7" ;;
    apache-drill) color="#8b5cf6" ;;
    dremio) color="#6366f1" ;;
    teiid) color="#3b82f6" ;;
    alluxio) color="#0ea5e9" ;;
    dbt) color="#06b6d4" ;;
    apache-orc) color="#14b8a6" ;;
    apache-thrift) color="#10b981" ;;
    apache-arrow) color="#84cc16" ;;
    capn-proto) color="#a3e635" ;;
    flatbuffers) color="#65a30d" ;;
    messagepack) color="#0d9488" ;;
    protocol-buffers) color="#0891b2" ;;
    apache-camel) color="#0284c7" ;;
    telegraf) color="#2563eb" ;;
    apache-activemq) color="#7c3aed" ;;
    liiklus) color="#9333ea" ;;
    nakadi) color="#c026d3" ;;
    waltz) color="#db2777" ;;
    zeromq) color="#e11d48" ;;
    cloudevents) color="#f43f5e" ;;
    apache-samza) color="#fb7185" ;;
    great-expectations) color="#fda4af" ;;
    datakitchen-testing) color="#fca5a5" ;;
    datakitchen-monitoring) color="#fecaca" ;;
    lakefs) color="#fed7aa" ;;
    awesome-workflow-engines) color="#fde047" ;;
    dagster) color="#bef264" ;;
    kestra) color="#86efac" ;;
    mage) color="#6ee7b7" ;;
    *) color="#f59e0b" ;;
  esac

  local initials
  if [[ "$name" =~ \  ]]; then
    initials=$(echo "$name" | awk '{print toupper(substr($1,1,1) substr($2,1,1))}')
  else
    initials=$(echo "$name" | awk '{print toupper(substr($1,1,2))}')
  fi

  cat > "$dest" <<EOF
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
  <rect width="100" height="100" rx="20" fill="${color}" opacity="0.15"/>
  <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="${color}" stroke-width="2" opacity="0.3"/>
  <text x="50" y="55" font-family="'Outfit', -apple-system, BlinkMacSystemFont, sans-serif" font-size="32" font-weight="700" fill="${color}" text-anchor="middle" dominant-baseline="middle">${initials}</text>
</svg>
EOF
  echo "→ Fallback: $id"
}

# Tool ID -> URL mapping
# Simple Icons CDN: https://cdn.simpleicons.org/{slug}
# TechIcons (icepanel) SVG: https://icon.icepanel.io/Technology/svg/{Name}.svg

download_or_fallback "apache-spark"   "https://cdn.simpleicons.org/apachespark"          "Apache Spark"
download_or_fallback "apache-beam"    ""                                                  "Apache Beam"
download_or_fallback "apache-flink"   "https://cdn.simpleicons.org/apacheflink"          "Apache Flink"
download_or_fallback "trino"          "https://cdn.simpleicons.org/trino"                "Trino"
download_or_fallback "apache-superset" "https://cdn.simpleicons.org/apachesuperset"      "Apache Superset"
download_or_fallback "hue"            ""                                                  "HUE"
download_or_fallback "metabase"       "https://cdn.simpleicons.org/metabase"             "Metabase"
download_or_fallback "redash"         "https://cdn.simpleicons.org/redash"               "Redash"
download_or_fallback "delta-lake"     ""                                                  "Delta Lake"
download_or_fallback "apache-hudi"    ""                                                  "Apache Hudi"
download_or_fallback "apache-iceberg" ""                                                  "Apache Iceberg"
download_or_fallback "debezium"       ""                                                  "Debezium"
download_or_fallback "maxwell"        ""                                                  "Maxwell"
download_or_fallback "apache-calcite" ""                                                  "Apache Calcite"
download_or_fallback "apache-cassandra" "https://cdn.simpleicons.org/apachecassandra"    "Apache Cassandra"
download_or_fallback "apache-druid"   "https://cdn.simpleicons.org/apachedruid"          "Apache Druid"
download_or_fallback "apache-hbase"   "https://cdn.simpleicons.org/apachehbase"          "Apache HBase"
download_or_fallback "apache-pinot"   ""                                                  "Apache Pinot"
download_or_fallback "clickhouse"     "https://cdn.simpleicons.org/clickhouse"           "ClickHouse"
download_or_fallback "influxdb"       "https://cdn.simpleicons.org/influxdb"             "InfluxDB"
download_or_fallback "minio"          "https://cdn.simpleicons.org/minio"                "MinIO"
download_or_fallback "postgres"       "https://cdn.simpleicons.org/postgresql"           "Postgres"
download_or_fallback "questdb"        ""                                                  "QuestDB"
download_or_fallback "amundsen"       ""                                                  "Amundsen"
download_or_fallback "apache-atlas"   ""                                                  "Apache Atlas"
download_or_fallback "datahub"        ""                                                  "DataHub"
download_or_fallback "metacat"        ""                                                  "Metacat"
download_or_fallback "elementary"     "https://cdn.simpleicons.org/elementary"           "Elementary"
download_or_fallback "monosi"         ""                                                  "Monosi"
download_or_fallback "openmetadata"   ""                                                  "OpenMetadata"
download_or_fallback "apache-drill"   ""                                                  "Apache Drill"
download_or_fallback "dremio"         ""                                                  "Dremio"
download_or_fallback "teiid"          ""                                                  "Teiid"
download_or_fallback "presto"         "https://cdn.simpleicons.org/presto"               "Presto"
download_or_fallback "alluxio"        ""                                                  "Alluxio"
download_or_fallback "dbt"            ""                                                  "dbt"
download_or_fallback "apache-avro"    "https://cdn.simpleicons.org/apacheavro"           "Apache Avro"
download_or_fallback "apache-parquet" "https://cdn.simpleicons.org/apacheparquet"        "Apache Parquet"
download_or_fallback "apache-orc"     ""                                                  "Apache ORC"
download_or_fallback "apache-thrift"  ""                                                  "Apache Thrift"
download_or_fallback "apache-arrow"   ""                                                  "Apache Arrow"
download_or_fallback "capn-proto"     ""                                                  "Capn Proto"
download_or_fallback "flatbuffers"    ""                                                  "FlatBuffers"
download_or_fallback "messagepack"    ""                                                  "MessagePack"
download_or_fallback "protocol-buffers" ""                                                "Protocol Buffers"
download_or_fallback "apache-camel"   ""                                                  "Apache Camel"
download_or_fallback "kafka-connect"  "https://cdn.simpleicons.org/apachekafka"          "Kafka Connect"
download_or_fallback "logstash"       "https://cdn.simpleicons.org/logstash"             "Logstash"
download_or_fallback "telegraf"       ""                                                  "Telegraf"
download_or_fallback "apache-activemq" ""                                                 "Apache ActiveMQ"
download_or_fallback "apache-kafka"   "https://cdn.simpleicons.org/apachekafka"          "Apache Kafka"
download_or_fallback "apache-pulsar"  "https://cdn.simpleicons.org/apachepulsar"         "Apache Pulsar"
download_or_fallback "liiklus"        ""                                                  "Liiklus"
download_or_fallback "nakadi"         ""                                                  "Nakadi"
download_or_fallback "nats"           "https://cdn.simpleicons.org/nats.io"              "NATS"
download_or_fallback "rabbitmq"       "https://cdn.simpleicons.org/rabbitmq"             "RabbitMQ"
download_or_fallback "waltz"          ""                                                  "Waltz"
download_or_fallback "zeromq"         ""                                                  "ZeroMQ"
download_or_fallback "cloudevents"    ""                                                  "CloudEvents"
download_or_fallback "apache-kafka-streams" "https://cdn.simpleicons.org/apachekafka"      "Kafka Streams"
download_or_fallback "apache-samza"   ""                                                  "Apache Samza"
download_or_fallback "apache-spark-structured-streaming" "https://cdn.simpleicons.org/apachespark" "Spark Streaming"
download_or_fallback "apache-storm"   "https://cdn.simpleicons.org/apachestorm"          "Apache Storm"
download_or_fallback "great-expectations" ""                                              "Great Expectations"
download_or_fallback "datakitchen-testing" ""                                             "DataKitchen"
download_or_fallback "prometheus"     "https://cdn.simpleicons.org/prometheus"           "Prometheus"
download_or_fallback "grafana"        "https://cdn.simpleicons.org/grafana"              "Grafana"
download_or_fallback "datakitchen-monitoring" ""                                          "DataKitchen"
download_or_fallback "lakefs"         ""                                                  "lakeFS"
download_or_fallback "awesome-workflow-engines" ""                                        "Workflow Engines"
download_or_fallback "apache-airflow" "https://cdn.simpleicons.org/apacheairflow"        "Apache Airflow"
download_or_fallback "apache-nifi"    "https://cdn.simpleicons.org/apachenifi"           "Apache NiFi"
download_or_fallback "knime"          "https://cdn.simpleicons.org/knime"                "KNIME"
download_or_fallback "prefect"        "https://cdn.simpleicons.org/prefect"              "Prefect"
download_or_fallback "dagster"        ""                                                  "Dagster"
download_or_fallback "kestra"         ""                                                  "Kestra"
download_or_fallback "mage"           ""                                                  "Mage"

echo "Done! Icons saved to $ICONS_DIR"
ls -1 "$ICONS_DIR" | wc -l | xargs echo "Total icons:"
