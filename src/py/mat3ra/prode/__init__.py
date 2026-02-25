from enum import Enum
from types import SimpleNamespace

from mat3ra.esse.models.properties_directory.enum_options import (
    ExternalSource,
    PropertyType,
    ScalarPropertyEnum,
    NonScalarPropertyEnum,
    TensorPropertyEnum,
    ObjectPropertyEnum,
    ProtoPropertyEnum,
    MetaPropertyEnum,
)


class AllPropertyEnum(str, Enum):
    """All property names combined from all categories"""
    pass


for enum_class in [
    ScalarPropertyEnum,
    NonScalarPropertyEnum,
    TensorPropertyEnum,
    ObjectPropertyEnum,
    ProtoPropertyEnum,
    MetaPropertyEnum,
]:
    for item in enum_class:
        setattr(AllPropertyEnum, item.name, item.value)


PropertyName = SimpleNamespace(
    scalar=ScalarPropertyEnum,
    non_scalar=NonScalarPropertyEnum,
    tensor=TensorPropertyEnum,
    object=ObjectPropertyEnum,
    proto=ProtoPropertyEnum,
    meta=MetaPropertyEnum,
    all=AllPropertyEnum,
)
