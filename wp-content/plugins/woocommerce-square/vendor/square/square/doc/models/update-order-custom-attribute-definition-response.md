
# Update Order Custom Attribute Definition Response

Represents a response from updating an order custom attribute definition.

## Structure

`UpdateOrderCustomAttributeDefinitionResponse`

## Fields

| Name | Type | Tags | Description | Getter | Setter |
|  --- | --- | --- | --- | --- | --- |
| `customAttributeDefinition` | [`?CustomAttributeDefinition`](../../doc/models/custom-attribute-definition.md) | Optional | Represents a definition for custom attribute values. A custom attribute definition<br>specifies the key, visibility, schema, and other properties for a custom attribute. | getCustomAttributeDefinition(): ?CustomAttributeDefinition | setCustomAttributeDefinition(?CustomAttributeDefinition customAttributeDefinition): void |
| `errors` | [`?(Error[])`](../../doc/models/error.md) | Optional | Any errors that occurred during the request. | getErrors(): ?array | setErrors(?array errors): void |

## Example (as JSON)

```json
{
  "custom_attribute_definition": {
    "created_at": "2022-11-09T21:25:28.693Z",
    "description": "updated",
    "key": "wayne-test-15",
    "name": "wayne-test-15",
    "schema": null,
    "updated_at": "2022-11-10T18:00:02.929Z",
    "version": 3,
    "visibility": "VISIBILITY_READ_WRITE_VALUES"
  }
}
```

